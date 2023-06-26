import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostListService } from 'src/app/shared/services/post-list.service';
import { Author, Comment, Content } from 'src/app/types/data';

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
    private postListService: PostListService,
    private router: Router
  ) {}

  filterList(userName: string) {
    this.data$ = this.postListService.filterListOfPostsByUser(userName);
    this.comments$ = this.postListService.filterListOfCommentsByUser(userName);
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
