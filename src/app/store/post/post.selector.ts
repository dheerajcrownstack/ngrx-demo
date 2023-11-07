import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPostInitialState } from "src/app/@types";

const getPostState = createFeatureSelector<IPostInitialState>('postState');

export const getPosts = createSelector(getPostState, (state) => state.posts)
