import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowUsersComponent } from './show-users/show-users.component';
import { ShowInfoComponent } from './show-info/show-info.component';
import { PostsComponent } from './posts/posts.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MakePosterComponent } from './make-poste/make-poste.component';
import { CalculeTimePipe } from './pipe/calcule-time.pipe';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ToImagePipe } from './pipe/to-image.pipe';
import { CategoryComponent } from './category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component' ;'@material/button';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    ShowUsersComponent,
    ShowInfoComponent,
    PostsComponent,
    MakePosterComponent,
    CalculeTimePipe,
    ToImagePipe,
    CategoryComponent,
    ConfirmDialogComponent,

 
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatDialogModule
    
    
   
  ],
  providers: [
     {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
