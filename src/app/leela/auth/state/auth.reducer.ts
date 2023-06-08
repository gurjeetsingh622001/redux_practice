import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from "./auth.state";
import { loginStart, loginSuccess } from "./auth.action";


const _AuthReducer = createReducer(initialState, on(loginSuccess, (state, action) => {
    console.log(state)
    console.log(action)
    return {
        ...state,
        user: action.user
    }
}))

export function AuthReducer(state = initialState, action: Action) {

    return _AuthReducer(state, action)
}