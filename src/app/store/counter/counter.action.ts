import { Action } from "src/app/@types"

export enum CounterActionsEnum {
    INCREMENT = "increment",
    DECREMENT = "decrement",
    RESET = "reset",
    COUNTER_VALUE = "counterValue",
    CHANGE_TITLE = "changeTitle"
}

export class IncrementCounter implements Action {
	readonly type = CounterActionsEnum.INCREMENT;
}

export class DecrementCounter implements Action {
    readonly type = CounterActionsEnum.DECREMENT
}

export class ResetCounter implements Action {
    readonly type = CounterActionsEnum.RESET
}

export class SetCounterValue implements Action {
    readonly type = CounterActionsEnum.COUNTER_VALUE
    
    constructor(
        public payload: any
    ) {}
}

export class ChangeTitle implements Action {
    readonly type = CounterActionsEnum.CHANGE_TITLE
    
    constructor(
        public payload: any
    ) {}
}

export type CounterAction = IncrementCounter | DecrementCounter | ResetCounter | SetCounterValue | ChangeTitle;
