import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Author, Content } from '../../interfaces/data.interface';

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
      const postContentObjectString = params.get('objString')!;
      const jsonObject = JSON.parse(postContentObjectString);
      this.content = jsonObject;
    });
  }

  onUserDetails(author: Author) {
    const authorObjectString = JSON.stringify(author);
    this.router.navigate(['user-details', { authorObjectString }]);
  }
}
