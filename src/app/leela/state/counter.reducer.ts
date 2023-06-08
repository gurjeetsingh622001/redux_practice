import { createReducer, on } from "@ngrx/store"
import { initialState } from "./counter.state"
import { InitialState } from "@ngrx/store/src/models"
import { changeChannelName, customIncrement, decrement, increment, reset } from "./counter.action"


const _counterReducer = createReducer(initialState,
    on(increment, (state) => {
        // console.log(state)
        return {
            ...state,
            counter: state.counter + 1

        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1

        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0

        }
    }),
    on(customIncrement, (state, action) => {

        return {
            ...state,
            counter: state.counter + action.value
        }
    }),
    on(changeChannelName, (state) => {
        return {
            ...state,
            channelName: "updated channel name gurjeet singh mean stack developer"
        }
    })
)

export function counterReducer(state: any, action: any) {

    return _counterReducer(state, action)

}