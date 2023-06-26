import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { Data } from 'src/app/interfaces/data.interface';

@Injectable({
  providedIn: 'root',
})
export class PostListService {
  private readonly accessTheData = '../../../assets/data.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Data>(this.accessTheData).pipe(delay(2000));
  }
}
