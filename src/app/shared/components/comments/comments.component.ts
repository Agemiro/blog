import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/interfaces/data.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  @Input() comments: Comment[] = [];
}
