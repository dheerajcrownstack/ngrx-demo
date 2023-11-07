import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostService } from "src/app/services/post/post.service";
import { GetPosts, GetPostsSuccess, PostActionEnum } from "./post.action";
import { EMPTY, catchError, map, switchMap } from "rxjs";

@Injectable()
export class PostEffect {

    loadPosts$ = createEffect(() => this.action$.pipe(
        ofType(PostActionEnum.GET_POSTS),
        switchMap(() => this.postService.getPosts().pipe(
            map((posts) => new GetPostsSuccess({posts})),
            catchError(() => EMPTY)
        )
    )));

    constructor(
        private postService: PostService,
        private action$: Actions
    ) {}
}
