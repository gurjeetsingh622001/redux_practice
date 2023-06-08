import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

export const Counter_State_Name = 'counter'
const getCounterState = createFeatureSelector<CounterState>(Counter_State_Name);

export const getCounter = createSelector(getCounterState, (state) => {
    return state.counter
});

export const getChannelName = createSelector(getCounterState, (state) => {
    return state.channelName
});

