import { createAction, props } from "@ngrx/store";

export const postList = createAction('postList');
export const postAdd = createAction('postAdd', props<{title: string, description: string}>);
export const postDelete = createAction('postDelete');