import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/types/app.state.interface';

import { Post } from '../../types/data.interface';
import { getPostById } from '../store/post-list.actions';
import * as postSelector from '../store/post-list.selectors';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.isLoading$ = this.store.pipe(
      select(postSelector.isLoadingPostByIdSelector)
    );
    this.error$ = this.store.pipe(select(postSelector.postByIdErrorSelector));
    this.post$ = this.store.pipe(select(postSelector.postByIdSelector));
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      var postId = params.get('postId')!;
      this.store.dispatch(getPostById({ postId: postId }));
    });
  }

  onUserDetails(authorUserName: string) {
    this.router.navigate(['user-details', { authorUserName }]);
  }
}
