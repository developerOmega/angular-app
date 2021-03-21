import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ArticleAdminComponent } from './article-admin/article-admin.component';
import { ArticleShowComponent } from './article-show/article-show.component';
import { ArticlesComponent } from './articles/articles.component';
import Cookie from '../assets/cookies';

const routes: Routes = [
  // Ruta main
  {path: '', component: ArticlesComponent},
  // Ruta de artículos
  {path: 'articles', component: ArticlesComponent},
  // Ruta de artículos por id
  {path: 'articles/:id', component: ArticleShowComponent},
  // Ruta de login
  // Redireccionar a ruta user/articles sí el la cookie token existe (usuario autenticado) 
  {
    path: 'user/login',
    redirectTo: !Cookie.getCookie('token') ? undefined : 'user/articles',
    component: !Cookie.getCookie('token') ? AdminLoginComponent : undefined,
    pathMatch: 'full'
  },
  // Ruta de artículos de administración
  // Redireccionar a ruta user/login sí el la cookie token no existe (usuario no autenticado)
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
