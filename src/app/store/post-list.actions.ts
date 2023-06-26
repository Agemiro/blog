import { createAction, props } from '@ngrx/store';
import { Data } from 'src/app/interfaces/data.interface';

export const getData = createAction('[Data] Get Data');

export const getDataSuccess = createAction(
  '[Data] Load Data Success',
  props<{ data: Data }>()
);

export const getDataError = createAction(
  '[Data] Load Data Error',
  props<{ error: string }>()
);
