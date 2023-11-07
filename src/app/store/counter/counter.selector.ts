import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterAction } from "./counter.action";
import { ICounterInitialState } from "src/app/@types";

const getCounterState = createFeatureSelector<ICounterInitialState>('counterState')

export const getCounter = createSelector(getCounterState, (state) => state.counter);
export const getTitle = createSelector(getCounterState, (state) => state.title);

