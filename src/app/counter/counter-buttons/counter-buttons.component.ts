import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store';
import { DecrementCounter, IncrementCounter, ResetCounter } from 'src/app/store/counter/counter.action';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent {
  constructor(
    private store: Store<IAppState>
  ) {}

  onClickButton(buttonType: string) {
    switch (buttonType) {
      case 'increment':
        this.store.dispatch(new IncrementCounter());
        break;
      case 'decrement':
        this.store.dispatch(new DecrementCounter());
        break;
      case 'reset':
        this.store.dispatch(new ResetCounter());
        break;
      default:
        break;
    }
  }

}
