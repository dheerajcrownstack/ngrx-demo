import { IPostInitialState, Action } from "src/app/@types";
import { PostEnum } from "./post.action";

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
        case PostEnum.GET_POSTS:
            return {
                ...state
            }
        case PostEnum.ADD_POST:
            return {
                ...state
            }
        default:
            return state
    }
}
