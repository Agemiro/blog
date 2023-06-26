import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Data } from 'src/app/types/data';

@Injectable({
  providedIn: 'root',
})
export class PostListService {
  private readonly accessTheData = '../../../assets/data.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient
      .get<Data>(this.accessTheData)
      .pipe(tap((n) => console.log(n)));
  }

  filterListOfPostsByUser(userName: string) {
    return this.httpClient
      .get<Data>(this.accessTheData)
      .pipe(
        map((element) =>
          element.data.filter((item) => item.author.username === userName)
        )
      );
  }

  // RETORNA UMA LISTA DE COMENTÁRIOS QUE CADA POST TEM, UNE ELAS E DEPOIS FILTRA PELO AUTOR DO COMENTÁRIO.
  filterListOfCommentsByUser(userName: string) {
    return this.httpClient.get<Data>(this.accessTheData).pipe(
      map((element) =>
        element.data
          .map((item) => item.comments)
          .flat()
          .filter((i) => i.author.username === userName)
      )
    );
  }
}
