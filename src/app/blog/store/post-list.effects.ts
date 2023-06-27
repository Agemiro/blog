import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PostListService } from 'src/app/shared/services/post-list.service';

import { getData, getDataError, getDataSuccess } from './post-list.actions';

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
}
