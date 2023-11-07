import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPost } from 'src/app/@types';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Observable<IPost[]> {
    let obs =  of([
        {
            id: 3,
            description: 'Post 3 desc',
            title: 'Post 3'
        },
        {
            id: 4,
            description: 'Post 4 desc',
            title: 'Post 4'
        }
      ])
    return obs;
  }
}
