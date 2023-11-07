import { IPostInitialState, Action } from "src/app/@types";
import { PostActionEnum } from "./post.action";

const initialState: IPostInitialState = {
    posts: [
        {
            id: 1,
            description: 'Post 1 desc',
            title: 'Post 1'
        },
        {
            id: 2,
            description: 'Post 2 desc',
            title: 'Post 2'
        }
    ]
};

export const postReducer = (state: IPostInitialState = initialState, action: Action): IPostInitialState => {
    switch (action.type) {
        case PostActionEnum.GET_POSTS_SUCCESS:
            console.log(action, state)
            return {
                ...state,
                posts: action.payload.posts
            }
        case PostActionEnum.ADD_POST:
            return {
                ...state
            }
        default:
            return state
    }
}
