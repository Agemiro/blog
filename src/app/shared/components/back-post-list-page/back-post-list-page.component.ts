import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-post-list-page',
  templateUrl: './back-post-list-page.component.html',
  styleUrls: ['./back-post-list-page.component.scss'],
})
export class BackPostListPageComponent {
  constructor(private router: Router) {}

  onBackPageList() {
    this.router.navigate(['post-list']);
  }
}
