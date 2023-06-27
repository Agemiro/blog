import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { BackPostListPageComponent } from './components/back-post-list-page/back-post-list-page.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HeaderComponent } from './components/header/header.component';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PostCardComponent,
    BackPostListPageComponent,
    CommentsComponent,
  ],
  imports: [CommonModule, AppMaterialModule],
  exports: [
    AppMaterialModule,
    HeaderComponent,
    PostCardComponent,
    BackPostListPageComponent,
    CommentsComponent,
  ],
})
export class SharedModule {}
