import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: '', pathMatch: 'full', redirectTo: 'blog' },
  { path: 'admin/blogs', component: AdminBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
