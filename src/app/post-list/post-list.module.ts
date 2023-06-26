import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListRoutingModule } from './post-list-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PostListComponent],
  imports: [CommonModule, PostListRoutingModule, SharedModule],
})
export class PostListModule {}
