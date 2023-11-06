import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICounterInitialState } from "../../@types";

// selector is responsible for sending the particular data from data state

const getCounterState = createFeatureSelector<ICounterInitialState>('counterState')

export const getCounter = createSelector(getCounterState, (state) => state.counter);
export const getTitle = createSelector(getCounterState, (state) => state.title);
