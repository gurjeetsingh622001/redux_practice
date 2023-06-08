import { AuthReducer } from "../auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/state/auth.selector";
import { AuthState } from "../auth/state/auth.state";
import { counterReducer } from "../state/counter.reducer";
import { CounterState } from "../state/counter.state";
import { PostState } from "./post.state";
import { postReducer } from "./posts.reducer";
import { SharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedState } from "./shared/shared.state";

// export interface AppState {
//     counter: CounterState,
//     posts: PostState
// } commented after at 28 video


// export const appReducer = {
//     counter: counterReducer,
//     posts: postReducer
// }commented after at 28 video

export interface AppState {
    [SHARED_STATE_NAME]: SharedState,
    [AUTH_STATE_NAME]: AuthState
}

export const appReducer = {
    [SHARED_STATE_NAME]: SharedReducer,
    [AUTH_STATE_NAME]: AuthReducer

};