import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MakePosterComponent } from './make-poster/make-poster.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"", component: PostsComponent},
  {path:"register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "posts", component: PostsComponent},
  {path: "makePoster", component: MakePosterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
