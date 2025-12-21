// /providers/auth/Auth.provider.tsx
import { useEffect, useReducer } from "react";
import { AuthContext, InitialAuthState } from "../../context";
import authReducer from "./authReducer";
import { supabase } from "../../utils";
import { authTypes } from "../../types";
import { useNavigate } from "react-router";

interface ProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, InitialAuthState);
  const navigate = useNavigate();
  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .maybeSingle();
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      return null;
    }
  };

  const setProfile = async (profileInfo: authTypes.UserInfoI) => {
    dispatch({ type: authTypes.ActionType.SetLoading, payload: true });
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) throw new Error("User not found");

      const { data, error } = await supabase
        .from("profiles")
        .insert({ ...profileInfo, id: session?.user.id })
        .select()
        .single();
      if (error) throw error;
      dispatch({
        type: authTypes.ActionType.SetUser,
        payload: { isAuth: true, user: data },
      });
    } catch (error) {
      console.error("Error set profile:", error);
      throw error;
    } finally {
      dispatch({ type: authTypes.ActionType.SetLoading, payload: false });
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session?.user) {
          const profileData = await fetchProfile(session.user.id);
          dispatch({
            type: authTypes.ActionType.SetUser,
            payload: { isAuth: true, user: profileData },
          });
        } else {
          dispatch({
            type: authTypes.ActionType.SetUser,
            payload: { isAuth: false, user: null },
          });
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
        dispatch({
          type: authTypes.ActionType.SetUser,
          payload: { isAuth: false, user: null },
        });
      } finally {
        dispatch({ type: authTypes.ActionType.SetLoading, payload: false });
      }
    };

    initializeAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth event:", event);
      if (event === "SIGNED_IN") {
        console.log(" ");
      } else if (event === "INITIAL_SESSION" || event === "TOKEN_REFRESHED") {
        if (session?.user) {
          const profileData = await fetchProfile(session.user.id);
          dispatch({
            type: authTypes.ActionType.SetUser,
            payload: { isAuth: true, user: profileData },
          });
        } else {
          dispatch({
            type: authTypes.ActionType.SetUser,
            payload: { isAuth: false, user: null },
          });
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    dispatch({ type: authTypes.ActionType.SetLoading, payload: true });
    try {
      const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw new Error(error.message);

      if (data.session) {
        const profileData = await fetchProfile(data.user.id);

        dispatch({
          type: authTypes.ActionType.SetUser,
          payload: { isAuth: true, user: profileData },
        });

        navigate("/callback");
      }

      return { error: null };
    } catch (error) {
      return {
        error: error instanceof Error ? error : new Error(String(error)),
      };
    } finally {
      dispatch({ type: authTypes.ActionType.SetLoading, payload: false });
    }
  };
  const signUp = async (email: string, password: string) => {
    dispatch({ type: authTypes.ActionType.SetLoading, payload: true });

    try {
      // const redirectUrl = `${window.location.origin}/profile-setup`;

      const { error } = await supabase.auth.signUp({
        email,
        password,
        // options: { emailRedirectTo: redirectUrl },
      });
      if (error) throw new Error(error.message);
      navigate("/callback");
      return { error: null };
    } catch (error) {
      return {
        error: error instanceof Error ? error : new Error(String(error)),
      };
    } finally {
      dispatch({ type: authTypes.ActionType.SetLoading, payload: false });
    }
  };
  const signOut = async () => {
    dispatch({ type: authTypes.ActionType.SetLoading, payload: true });

    try {
      await supabase.auth.signOut();
      dispatch({ type: authTypes.ActionType.ResetAuth });
      navigate("/auth");
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      dispatch({ type: authTypes.ActionType.SetLoading, payload: false });
    }
  };
  const refreshProfile = async () => {
    if (state.user) {
      const profileData = await fetchProfile(state.user.id!);
      dispatch({
        type: authTypes.ActionType.SetUser,
        payload: { isAuth: true, user: profileData },
      });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        signIn,
        signUp,
        signOut,
        refreshProfile,
        setProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
