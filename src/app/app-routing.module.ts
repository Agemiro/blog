import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'post-list' },
  {
    path: 'post-list',
    loadChildren: () =>
      import('./post-list/post-list.module').then((m) => m.PostListModule),
  },
  {
    path: 'post-details',
    loadChildren: () =>
      import('./post-details/post-details.module').then(
        (m) => m.PostDetailsModule
      ),
  },
  {
    path: 'user-details',
    loadChildren: () =>
      import('./user-details/user-details.module').then(
        (m) => m.UserDetailsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'post-list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
