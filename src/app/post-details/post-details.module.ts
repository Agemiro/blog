import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostDetailsRoutingModule } from './post-details-routing.module';

@NgModule({
  declarations: [PostDetailsComponent],
  imports: [CommonModule, PostDetailsRoutingModule, SharedModule],
})
export class PostDetailsModule {}
