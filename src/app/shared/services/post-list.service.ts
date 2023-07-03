import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map } from 'rxjs';
import { Data, Post, Comment } from 'src/app/types/data.interface';

@Injectable({
  providedIn: 'root',
})
export class PostListService {
  private readonly accessTheData = '../../../assets/data.json';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Data> {
    return this.httpClient.get<Data>(this.accessTheData).pipe(delay(2000));
  }

  getPostById(postId: string): Observable<Post | undefined> {
    return this.httpClient.get<Data>(this.accessTheData).pipe(
      delay(2000),
      map((element) => element.data.find((item) => item.id === postId))
    );
  }

  getPostsByAuthor(authorUserName: string): Observable<Post[]> {
    return this.httpClient.get<Data>(this.accessTheData).pipe(
      delay(2000),
      map((element) =>
        element.data.filter((item) => item.author.username === authorUserName)
      )
    );
  }

  getCommentsByAuthor(authorUserName: string): Observable<Comment[]> {
    return this.httpClient.get<Data>(this.accessTheData).pipe(
      delay(2000),
      map((element) =>
        element.data
          .map((item) => item.comments)
          .flat()
          .filter((comment) => comment.author.username === authorUserName)
      )
    );
  }
}
