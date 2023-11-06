import { createReducer, on } from "@ngrx/store"
import { ICounterInitialState } from "../../@types";
import { changeTitle, counterValue, decrement, increment, reset } from "../actions/counter.action"


export const counterInitialState: ICounterInitialState = {
    counter: 0,
    title: ''
};


const _counterReducer = createReducer(
    counterInitialState,
    on(increment, (state) => {
        console.log(state);
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(counterValue, (state, action: any) => {
        return {
            ...state,
            counter: action.value
        }
    }),
    on(changeTitle, (state, action: any) => {
        return {
            ...state,
            title: action.title
        }
    })
)

export const CounterReducer = (state: any, action: any) => {
    return _counterReducer(state, action);
}