import { createAction, props } from '@ngrx/store';
import { Comment, Data, Post } from 'src/app/types/data.interface';

export const getData = createAction('[Data] Get Data');

export const getDataSuccess = createAction(
  '[Data] Load Data Success',
  props<{ data: Data }>()
);

export const getDataError = createAction(
  '[Data] Load Data Error',
  props<{ error: string }>()
);

export const getPostById = createAction(
  '[Post] Get Post',
  props<{ postId: string }>()
);

export const getPostByIdSuccess = createAction(
  '[Post] Load Post Success',
  props<{ post: Post | undefined }>()
);

export const getPostByIdError = createAction(
  '[Post] Load Post Error',
  props<{ error: string }>()
);

export const getPostsByAuthor = createAction(
  '[Posts] Get Posts By Author',
  props<{ authorUserName: string }>()
);

export const getPostsByAuthorSuccess = createAction(
  '[Posts] Load Posts By Author Success',
  props<{ postsByAuthor: Post[] }>()
);

export const getPostsByAuthorError = createAction(
  '[Posts] Load Posts By AuthorError',
  props<{ error: string }>()
);

export const getCommentsByAuthor = createAction(
  '[Comments] Get Comments By Author',
  props<{ authorUserName: string }>()
);

export const getCommentsByAuthorSuccess = createAction(
  '[Comments] Load Comments By Author Success',
  props<{ commentsByAuthor: Comment[] }>()
);

export const getCommentsByAuthorError = createAction(
  '[Comments] Load Comments By AuthorError',
  props<{ error: string }>()
);
