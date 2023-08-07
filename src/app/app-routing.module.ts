import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { LoginComponent } from './login/login.component';
import { MakePosterComponent } from './make-poste/make-poste.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"", component: PostsComponent},
  {path:"register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "category", component: CategoryComponent},
  {path: "posts", component: PostsComponent, },
  {path: "makePoster", component: MakePosterComponent}
];

/* canActivate: [IsLoggedGuard] */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
