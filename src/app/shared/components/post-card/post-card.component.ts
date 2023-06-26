import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Content } from 'src/app/interfaces/data.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  @Input() data: Content[] = [];
  @Output() postDetails = new EventEmitter(false);

  onPostDetails(content: Content) {
    this.postDetails.emit(content);
  }
}
