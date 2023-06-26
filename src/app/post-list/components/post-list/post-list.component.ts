import { Component, OnInit } from '@angular/core';
import { PostListService } from '../../../shared/services/post-list.service';
import { Data, Content } from 'src/app/types/data';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  data$: Observable<Data> | null = null;

  constructor(
    private postListService: PostListService,
    private router: Router
  ) {
    this.list();
  }
  ngOnInit(): void {}

  list() {
    this.data$ = this.postListService.list();
  }

  onPostDetails(content: Content) {
    const objString = JSON.stringify(content);
    this.router.navigate(['post-details', { objString }]);
  }
}
