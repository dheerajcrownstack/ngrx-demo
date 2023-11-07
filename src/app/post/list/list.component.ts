import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPost } from 'src/app/@types';
import { IAppState } from 'src/app/store';
import { getPosts } from 'src/app/store/post/post.selector';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  postList: IPost[] = [];

  constructor(
    private store: Store<IAppState>
  ) {
    this.store.select(getPosts).subscribe((res) => {
      this.postList = res;
    })
  }
}
