import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../types/app.state.interface';
import { Comment, Post } from '../../types/data.interface';
import {
  getCommentsByAuthor,
  getPostsByAuthor,
} from '../store/post-list.actions';
import * as postSelector from '../store/post-list.selectors';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  posts$: Observable<Post[]> | null = null;
  isLoadingPosts$: Observable<boolean>;
  postsError$: Observable<string | null>;

  comments$: Observable<Comment[]> | null = null;
  isLoadingComments$: Observable<boolean>;
  commentsError$: Observable<string | null>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.posts$ = this.store.pipe(select(postSelector.PostsByAuthorSelector));
    this.isLoadingPosts$ = this.store.pipe(
      select(postSelector.isLoadingPostsByAuthorSelector)
    );
    this.postsError$ = this.store.pipe(
      select(postSelector.PostsByAuthorErrorSelector)
    );
    this.comments$ = this.store.pipe(
      select(postSelector.CommentsByAuthorSelector)
    );
    this.isLoadingComments$ = this.store.pipe(
      select(postSelector.isLoadingCommentsByAuthorSelector)
    );
    this.commentsError$ = this.store.pipe(
      select(postSelector.CommentsByAuthorErrorSelector)
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      var username = params.get('authorUserName')!;
      this.store.dispatch(getPostsByAuthor({ authorUserName: username }));
      this.store.dispatch(getCommentsByAuthor({ authorUserName: username }));
    });
  }

  onPostDetails(postId: string) {
    this.router.navigate(['post-details', { postId }]);
  }
}
