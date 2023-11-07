import { ICounterInitialState, IPostInitialState } from "../@types";
import { CounterReducer } from "./reducer/counter.reducer";
import { PostReducer } from "./reducer/post.reducer";

export interface IAppStore {
    counterState: ICounterInitialState,
    postState: IPostInitialState
}

export const AppStore = {
    counterState: CounterReducer,
    postState: PostReducer
}
