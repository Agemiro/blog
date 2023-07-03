import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataState } from 'src/app/types/data.state.interface';

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

export const isLoadingPostByIdSelector = createSelector(
  selectFeature,
  (state) => state?.isLoading
);

export const postByIdSelector = createSelector(
  selectFeature,
  (state) => state?.post
);

export const postByIdErrorSelector = createSelector(
  selectFeature,
  (state) => state?.error
);

export const isLoadingPostsByAuthorSelector = createSelector(
  selectFeature,
  (state) => state?.isLoading
);

export const PostsByAuthorSelector = createSelector(
  selectFeature,
  (state) => state?.postsByAuthor
);

export const PostsByAuthorErrorSelector = createSelector(
  selectFeature,
  (state) => state?.error
);

export const isLoadingCommentsByAuthorSelector = createSelector(
  selectFeature,
  (state) => state?.isLoading
);

export const CommentsByAuthorSelector = createSelector(
  selectFeature,
  (state) => state?.commentsByAuthor
);

export const CommentsByAuthorErrorSelector = createSelector(
  selectFeature,
  (state) => state?.error
);
