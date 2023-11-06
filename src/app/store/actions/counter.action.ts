import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const counterValue = createAction('counterValue', props<{value: number}>())
export const changeTitle = createAction('changeTitle', props<{title: string}>())