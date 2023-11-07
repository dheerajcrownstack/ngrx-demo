import {ActionReducerMap} from "@ngrx/store";
import { ICounterInitialState, IPostInitialState } from "../@types";
import { counterReducer } from "./counter/counter.reducer";
import { postReducer } from "./post/post.reducer";
import { PostEffect } from "./post/post.effect";

export interface IAppState {
    counterState: ICounterInitialState,
    postState: IPostInitialState
}

export const AppReducer: ActionReducerMap<IAppState> = {
    counterState: counterReducer,
    postState: postReducer
}

export const AppEffects = [PostEffect]
