export interface AuthStateI {
    user: UserInfoI | null;
    isAuth: boolean;
    loading: boolean;
}
export interface UserInfoI {
    id?: string,
    fullname: string,
    username: string,
    phone: string,
    role: "customer" | "vendor",
    bio: string,
    address: string
}
export const ActionType = {
    SetUser: "SET_USER",
    SetLoading: "SET_LOADING",
    ResetAuth: "RESET_AUTH",
  } as const;
export type AuthReducerAction =
| { type: typeof ActionType.SetUser; payload: {isAuth: boolean, user?: UserInfoI | null} | null }
| { type: typeof ActionType.SetLoading; payload: boolean }
| { type: typeof ActionType.ResetAuth };

