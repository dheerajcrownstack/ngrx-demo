import { ICounterInitialState } from "src/app/@types";
import {CounterAction, CounterActionsEnum} from "./counter.action";
import {Action} from "src/app/@types";

const initialState: ICounterInitialState = {
    counter: 0,
    title: ''
}

export const counterReducer = (state: ICounterInitialState = initialState, action: Action): ICounterInitialState => {
    switch (action.type) {
        case CounterActionsEnum.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
    
        case CounterActionsEnum.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }

        case CounterActionsEnum.RESET:
            return {
                ...state,
                counter: 0
            }
        
        case CounterActionsEnum.COUNTER_VALUE:
            const {value} = action.payload;
            return {
                ...state,
                counter: value
            }
        
        case CounterActionsEnum.CHANGE_TITLE: 
            return {
                ...state,
                title: action.payload.title
            }

        default:
            return state;
    }
}