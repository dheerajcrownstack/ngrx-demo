import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from 'src/app/store';
import { decrement, increment, reset } from 'src/app/store/actions/counter.action';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent {
  constructor(
    private store: Store<IAppStore>
  ) {}

  onClickButton(buttonType: string) {
    switch (buttonType) {
      case 'increment':
        this.store.dispatch(increment());
        break;
      case 'decrement':
        this.store.dispatch(decrement());
        break;
      case 'reset':
        this.store.dispatch(reset());
        break;
      default:
        break;
    }
  }

}
