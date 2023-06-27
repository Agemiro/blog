import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { dataSelector } from 'src/app/blog/store/post-list.selectors';

import { AppState } from '../../interfaces/app.state.interface';
import { Author, Comment, Content } from '../../interfaces/data.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  data$: Observable<Content[]> | null = null;
  comments$: Observable<Comment[]> | null = null;
  author: Author | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  filterList(userName: string) {
    this.data$ = this.store
      .pipe(select(dataSelector))
      .pipe(
        map((element) =>
          element.data.filter((item) => item.author.username === userName)
        )
      );
    this.comments$ = this.store.pipe(select(dataSelector)).pipe(
      map((element) =>
        element.data
          .map((item) => item.comments)
          .flat()
          .filter((comment) => comment.author.username === userName)
      )
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const objString = params.get('authorObjectString')!;
      const obj = JSON.parse(objString);
      this.author = obj;
      this.filterList(obj.username);
    });
  }

  onPostDetails(content: Content) {
    const objString = JSON.stringify(content);
    this.router.navigate(['post-details', { objString }]);
  }
}
