import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/types/data.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  @Input() posts: Post[] = [];
  @Output() postDetails = new EventEmitter(false);

  onPostDetails(postId: string) {
    this.postDetails.emit(postId);
  }
}
