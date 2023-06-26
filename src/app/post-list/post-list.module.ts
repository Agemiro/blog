import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListRoutingModule } from './post-list-routing.module';
import { DataEffects } from '../store/post-list.effects';
import { dataReducer } from '../store/post-list.reducer';

@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    PostListRoutingModule,
    SharedModule,
    StoreModule.forFeature('app', dataReducer),
    EffectsModule.forFeature([DataEffects]),
  ],
})
export class PostListModule {}
