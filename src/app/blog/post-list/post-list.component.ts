import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../types/app.state.interface';
import { Data } from '../../types/data.interface';
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

  onPostDetails(postId: string) {
    this.router.navigate(['post-details', { postId }]);
  }
}
