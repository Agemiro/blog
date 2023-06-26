import { createReducer, on } from '@ngrx/store';
import { DataState } from 'src/app/interfaces/data.state.interface';
import { getData, getDataError, getDataSuccess } from './post-list.actions';

export const initialState: DataState = {
  isLoading: false,
  data: { data: [], success: false, total: '0' },
  error: null,
};

export const dataReducer = createReducer(
  initialState,
  on(getData, (state) => ({ ...state, isLoading: true })),
  on(getDataSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.data,
  })),
  on(getDataError, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
