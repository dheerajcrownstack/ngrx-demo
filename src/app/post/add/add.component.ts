import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private store: Store<any>
  ) {
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })
  }

  addPost() {
    if(this.form.invalid) {
      return;
    }
  }
  
  
}
