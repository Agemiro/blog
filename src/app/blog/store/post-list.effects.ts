import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PostListService } from 'src/app/shared/services/post-list.service';

import {
  getCommentsByAuthor,
  getCommentsByAuthorError,
  getCommentsByAuthorSuccess,
  getData,
  getDataError,
  getDataSuccess,
  getPostById,
  getPostByIdError,
  getPostByIdSuccess,
  getPostsByAuthor,
  getPostsByAuthorError,
  getPostsByAuthorSuccess,
} from './post-list.actions';

@Injectable()
export class DataEffects {
  constructor(
    private actions$: Actions,
    private postListService: PostListService
  ) {}

  getData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getData),
      mergeMap(() => {
        return this.postListService.list().pipe(
          map((data) => getDataSuccess({ data })),
          catchError((error) => of(getDataError({ error: error.message })))
        );
      })
    )
  );

  getPostById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPostById),
      mergeMap((action) => {
        return this.postListService.getPostById(action.postId).pipe(
          map((post) => getPostByIdSuccess({ post })),
          catchError((error) => of(getPostByIdError({ error: error.message })))
        );
      })
    )
  );

  getPostsByAuthor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPostsByAuthor),
      mergeMap((action) => {
        return this.postListService
          .getPostsByAuthor(action.authorUserName)
          .pipe(
            map((postsByAuthor) => getPostsByAuthorSuccess({ postsByAuthor })),
            catchError((error) =>
              of(getPostsByAuthorError({ error: error.message }))
            )
          );
      })
    )
  );

  getCommentsByAuthor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCommentsByAuthor),
      mergeMap((action) => {
        return this.postListService
          .getCommentsByAuthor(action.authorUserName)
          .pipe(
            map((commentsByAuthor) =>
              getCommentsByAuthorSuccess({ commentsByAuthor })
            ),
            catchError((error) =>
              of(getCommentsByAuthorError({ error: error.message }))
            )
          );
      })
    )
  );
}
