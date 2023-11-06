import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterRouterModule } from './counter-router.module';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomInputComponent
  ],
  imports: [
    CommonModule,
    CounterRouterModule,
    FormsModule
  ]
})
export class CounterModule { }
