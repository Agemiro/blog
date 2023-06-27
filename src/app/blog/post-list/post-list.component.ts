import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../interfaces/app.state.interface';
import { Content, Data } from '../../interfaces/data.interface';
import { getData } from '../store/post-list.actions';
import {
  dataSelector,
  errorSelector,
  isLoadingSelector,
} from '../store/post-list.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  data$: Observable<Data>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.data$ = this.store.pipe(select(dataSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(getData());
  }

  // Passo para a página de detalhes de post exatamente o post que foi clicado através do post card.
  onPostDetails(content: Content) {
    const postContentObjectString = JSON.stringify(content);
    this.router.navigate([
      'post-details',
      { objString: postContentObjectString },
    ]);
  }
}
