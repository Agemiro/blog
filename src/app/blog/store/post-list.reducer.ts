import { createReducer, on } from '@ngrx/store';
import { DataState } from 'src/app/types/data.state.interface';

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

export const initialState: DataState = {
  isLoading: false,
  data: { data: [], success: false, total: '0' },
  post: {
    author: {
      username: '',
      name: '',
      job: '',
    },
    body: '',
    comments: [],
    id: '',
    image: '',
    title: '',
  },
  postsByAuthor: [],
  commentsByAuthor: [],
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
  })),
  on(getPostById, (state) => ({ ...state, isLoading: true })),
  on(getPostByIdSuccess, (state, action) => ({
    ...state,
    post: action.post!,
    isLoading: false,
  })),
  on(getPostByIdError, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(getPostsByAuthor, (state) => ({ ...state, isLoading: true })),
  on(getPostsByAuthorSuccess, (state, action) => ({
    ...state,
    postsByAuthor: action.postsByAuthor,
    isLoading: false,
  })),
  on(getPostsByAuthorError, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(getCommentsByAuthor, (state) => ({ ...state, isLoading: true })),
  on(getCommentsByAuthorSuccess, (state, action) => ({
    ...state,
    commentsByAuthor: action.commentsByAuthor,
    isLoading: false,
  })),
  on(getCommentsByAuthorError, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
