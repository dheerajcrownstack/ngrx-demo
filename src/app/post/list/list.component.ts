import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPost } from 'src/app/@types';
import { IAppStore } from 'src/app/store';
import { postList } from 'src/app/store/actions/post.action';
import { getPost } from 'src/app/store/selector/post.selector';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  postList: IPost[] = [];

  constructor(
    private store: Store<IAppStore>
  ) {
    this.store.select(getPost).subscribe((res) => {
      this.postList = res;
    })
  }
}
