import { authTypes } from "../../types";

export default function authReducer(
  state: authTypes.AuthStateI,
  action: authTypes.AuthReducerAction
): authTypes.AuthStateI {
  switch (action.type) {
    case authTypes.ActionType.SetUser:
      return action.payload
        ? { ...state, isAuth: action.payload.isAuth, user: action.payload.user ?? null }
        : state;
    case authTypes.ActionType.SetLoading:
      return { ...state, loading: action.payload };
    case authTypes.ActionType.ResetAuth:
      return { ...state, isAuth: false, user: null }


    default:
      return state;
  }
}
