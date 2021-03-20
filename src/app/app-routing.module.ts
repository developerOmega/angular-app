import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ArticleAdminComponent } from './article-admin/article-admin.component';
import { ArticleShowComponent } from './article-show/article-show.component';
import { ArticlesComponent } from './articles/articles.component';
import Cookie from '../assets/cookies';

const routes: Routes = [
  {path: '', component: ArticlesComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'articles/:id', component: ArticleShowComponent},
  {
    path: 'user/login', 
    redirectTo: !Cookie.getCookie('token') ? undefined : 'user/articles',
    component: !Cookie.getCookie('token') ? AdminLoginComponent : undefined,
    pathMatch: 'full'
  },
  {
    path: 'user/articles', 
    redirectTo: !Cookie.getCookie('token') ? 'user/login' : undefined,  
    component: !Cookie.getCookie('token') ? undefined : ArticleAdminComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
