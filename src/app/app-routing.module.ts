import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './viwes/about/about.component';
import { PostsComponent } from './viwes/posts/posts.component';
import { SinglpostComponent } from './viwes/singlpost/singlpost.component';
import { UserComponent } from './viwes/user/user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'singlpost/:id', component: SinglpostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
