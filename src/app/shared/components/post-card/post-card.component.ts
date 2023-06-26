import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Content } from 'src/app/types/data';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  @Input() contents: Content[] = [];
  @Output() see = new EventEmitter(false);

  onPostDetails(content: Content) {
    this.see.emit(content);
  }
}
