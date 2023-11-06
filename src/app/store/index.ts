import { CounterReducer } from "./reducer/counter.reducer";
import { PostReducer } from "./reducer/post.reducer";

export const AppStore = {
    counterState: CounterReducer,
    postState: PostReducer
}
