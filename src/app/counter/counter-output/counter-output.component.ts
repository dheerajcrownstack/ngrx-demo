import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounterInitialState } from 'src/app/@types';
import { getCounter, getTitle } from 'src/app/store/selector/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent {
  output: number = 0;
  title: string = '';
  constructor(
    private store: Store<{counterState: ICounterInitialState}>
  ) {
    this.store.select(getCounter).subscribe(data => this.output = data);
    this.store.select(getTitle).subscribe(data => this.title = data);
  }
}
