import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataEffects } from './store/post-list.effects';
import { dataReducer } from './store/post-list.reducer';

@NgModule({
  declarations: [PostListComponent, PostDetailsComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    StoreModule.forFeature('app', dataReducer),
    EffectsModule.forFeature([DataEffects]),
  ],
})
export class BlogModule {}
