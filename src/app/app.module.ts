import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleShowComponent } from './article-show/article-show.component';
import { ArticleAdminComponent } from './article-admin/article-admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ArticleTagComponent } from './tags/article-tag/article-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleShowComponent,
    ArticleAdminComponent,
    AdminLoginComponent,
    ArticleTagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    console.log("Inicializavion de la aplicacion")
  }

}
