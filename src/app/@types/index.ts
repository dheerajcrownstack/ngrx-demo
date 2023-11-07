import { Action as NgrxAction } from "@ngrx/store"

export interface ICounterInitialState {
    counter: number,
    title: string
}

export interface IPostInitialState {
    posts: IPost[]
}

export interface IPost {
    id: number,
    title: string,
    description: string
}

export interface Action extends NgrxAction {
    payload?: any
}
