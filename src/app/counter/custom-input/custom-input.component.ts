import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounterInitialState } from 'src/app/@types';
import { ChangeTitle, SetCounterValue } from 'src/app/store/counter/counter.action';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {
  customValue: number = 0;
  constructor(
    private store: Store<{counterState: ICounterInitialState}>
  ) {}

  submit() {
    this.store.dispatch(new SetCounterValue({value: this.customValue}))
  }

  changeTitle() {
    this.store.dispatch(new ChangeTitle({title: 'Learning Ngrx'}));
  }
}
