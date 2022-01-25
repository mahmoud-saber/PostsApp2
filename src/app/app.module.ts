import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './viwes/posts/posts.component';
import { UserComponent } from './viwes/user/user.component';
import { AboutComponent } from './viwes/about/about.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SinglpostComponent } from './viwes/singlpost/singlpost.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UserComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SinglpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
