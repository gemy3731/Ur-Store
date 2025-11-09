import { useEffect, useReducer } from "react";
import { AuthContext, InitialAuthState } from "../../context";
import authReducer from "./authReducer";
import { supabase } from "../../utils";
import { authTypes } from "../../types";
import { useNavigate } from "react-router";


interface ProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, InitialAuthState)
  const navigate = useNavigate();
  const fetchProfile = async (userId: string) => {
    try{
      const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .maybeSingle();
      if(error) throw error;
      return data;
    }catch(error){
      console.error("Error fetching profile:", error);
      return null;
    }
  };

  useEffect(()=>{
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_, session) => {
      dispatch({ type: authTypes.ActionType.SetUser, payload: {isAuth: !!session} });

      if (session?.user) {
        const profileData = await fetchProfile(session.user.id);
        dispatch({ type: authTypes.ActionType.SetUser, payload: {isAuth: true, user: profileData} });
      } else {
        dispatch({ type: authTypes.ActionType.SetUser, payload: null });
      }

      dispatch({ type: authTypes.ActionType.SetLoading, payload: false });
    });

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      dispatch({ type: authTypes.ActionType.SetUser, payload: {isAuth: !!session}});

      if (session?.user) {
        const profileData = await fetchProfile(session.user.id);
        dispatch({ type: authTypes.ActionType.SetUser, payload: {isAuth: true, user: profileData} });
      }

      dispatch({ type: authTypes.ActionType.SetLoading, payload: false });
    });

    return () => subscription.unsubscribe();
  },[])

  const signIn = async (email: string, password: string) => {
    const { error, data } = await supabase.auth.signInWithPassword({ email, password });
    if (!error && data.session) {
      const profileData = await fetchProfile(data.user.id);
      dispatch({ type: authTypes.ActionType.SetUser, payload: {isAuth: true, user: profileData} });
    }
    return { error };
  };
  const signUp = async (email: string, password: string) => {
    const redirectUrl = `${window.location.origin}/profile-setup`;
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: redirectUrl },
    });
    return { error };
  };
  const signOut = async () => {
    await supabase.auth.signOut();
    dispatch({ type: authTypes.ActionType.ResetAuth });
    navigate("/auth");
  };
  const refreshProfile = async () => {
    if (state.user) {
      const profileData = await fetchProfile(state.user.id);
      dispatch({ type: authTypes.ActionType.SetUser, payload: {isAuth: true, user: profileData} });
    }
  };
  return (
    <AuthContext.Provider value={{ state, dispatch, signIn, signUp, signOut, refreshProfile }} >{children}</AuthContext.Provider>
  )
}

export default AuthProvider;