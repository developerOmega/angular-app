import { Component, OnInit } from '@angular/core';
import Request from '../../assets/request';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-admin',
  templateUrl: './article-admin.component.html',
  styleUrls: ['./article-admin.component.css']
})
export class ArticleAdminComponent implements OnInit {
  Article: Request = new Request;
  selectArticle: Article = new Article;
  articles: Article[] = [];
  constructor() { }

  // Al inicializar página, obtener artículos de base de datos por medio de petición get
  async ngOnInit() {
    try {
      const data = await this.Article.get('/v1/articles');
      this.articles = data.articles;
    } catch (error) {
      console.error(error);
    }
  }

  // Método para agregar o editar artículo
  async createOrEditArticle() {
    try {
      // Si el id de la propiedad selectArticle es igual a 0, crear un nuevo artículo; en caso contrario actualizar artículo existente
      const data = this.selectArticle._id == 0 ? 
        await this.Article.post('/v1/articles', this.selectArticle) :
        await this.Article.put(`/v1/articles/${this.selectArticle._id}`, this.selectArticle);

      // Si el id de la propiedad selectArticle es igual a 0, agregar nuevo artículo a array
      if(this.selectArticle._id == 0) {
        this.articles.push(data.article);
      }
      
      // Limpiar formulario
      this.cleanSelectArticle()
    } catch (error) {
      console.error(error);
    }
  }

  // Método para eliminar artículo
  async deleteAricle() {
    try {
      // Hacer petición para eliminar artículo
      await this.Article.delete(`/v1/articles/${this.selectArticle._id}`);
      
      // Filtrar todos los articulo que son diferentes al articulo obtenido por la petición
      const articles = this.articles.filter(article => this.selectArticle != article);

      // El array de artículos es igual al filtrado
      this.articles = articles;

      // Limpiar formulario
      this.cleanSelectArticle();
    } catch (error) {
      console.error(error);
    }
  }

  // Método para limpiar propiedad selectArticle (Nueva instancia) 
  cleanSelectArticle() {
    this.selectArticle = new Article;
  }

  // Método para agregar articulo seleccionado a propiedad selectArticle
  openForEdit(article: Article) {
    this.selectArticle = article;
  }

}
