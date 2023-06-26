import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataState } from 'src/app/interfaces/data.state.interface';

//export const selectFeature = (state: AppState) => state.dataState;

//O PROBLEMA TAVA AQUI ESSE NOME 'app' TEM QUE SER IGUAL AO DO StoreModule.forFeature('app', dataReducer),
export const selectFeature = createFeatureSelector<DataState>('app');

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state?.isLoading
);

export const dataSelector = createSelector(
  selectFeature,
  (state) => state?.data
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state?.error
);
