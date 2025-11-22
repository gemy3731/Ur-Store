import React, { createContext, useContext } from "react";
import type { authTypes } from "../types";
import type { AuthReducerAction, AuthStateI } from "../types/auth.types";

export const InitialAuthState: authTypes.AuthStateI = {
    isAuth: false,
    loading: true,
    user: null
}

export interface AuthContextValue {
    state: AuthStateI;
    dispatch: React.Dispatch<AuthReducerAction>;
    signIn: (email: string, password: string) => Promise<{ error: Error|null}>;
    signUp: (email: string, password: string) => Promise<{ error: Error|null}>;
    signOut: () => Promise<void>;
    setProfile: (profileInfo: authTypes.UserInfoI) => Promise<void>;
    refreshProfile: () => Promise<void>;
  }
export const AuthContext = createContext<AuthContextValue>(
    {
        state: InitialAuthState,

        dispatch: () => null,
      
        signIn: async () => ({ error: null }),
      
        signUp: async () => ({ error: null }),
      
        signOut: async () => {},

        setProfile: async () => {},
      
        refreshProfile: async () => {},

    }
);
export function useAuth() {
    return useContext(AuthContext);
}