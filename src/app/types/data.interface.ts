export interface Author {
  username: string;
  name: string;
  job: string;
}

export interface Comment {
  author: Author;
  comment: string;
  id: string;
}

export interface Post {
  author: Author;
  body: string;
  comments: Comment[];
  id: string;
  image: string;
  title: string;
}

export interface Data {
  data: Post[];
  success: boolean;
  total: string;
}
