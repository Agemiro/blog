import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author, Content } from 'src/app/types/data';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent {
  content: Content | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const objString = params.get('objString')!;
      const obj = JSON.parse(objString);
      this.content = obj;
    });
  }

  onBackPageList() {
    this.router.navigate(['post-list']);
  }

  onUserDetails(author: Author) {
    const authorObjectString = JSON.stringify(author);
    this.router.navigate(['user-details', { authorObjectString }]);
  }
}
