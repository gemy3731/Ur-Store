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
export enum ActionType {
    SetUser = "SET_USER",
    // SetSession = "SET_SESSION",
    SetLoading = "SET_LOADING",
    ResetAuth = "RESET_AUTH",

}
export type AuthReducerAction =
| { type: ActionType.SetUser; payload: {isAuth: boolean, user?: UserInfoI | null} | null }
| { type: ActionType.SetLoading; payload: boolean }
| { type: ActionType.ResetAuth };

