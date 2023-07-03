import { Comment, Data, Post } from './data.interface';

export interface DataState {
  isLoading: boolean;
  data: Data;
  post: Post;
  postsByAuthor: Post[];
  commentsByAuthor: Comment[];
  error: string | null;
}
