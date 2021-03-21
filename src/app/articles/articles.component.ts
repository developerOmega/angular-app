import { Component, OnInit } from '@angular/core';
import Request from '../../assets/request';
import { Article } from '../models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  Article:Request = new Request;
  articles:Article[] = [];
  constructor() {
  }
  
  // Al inicializar página, obtener todos los artículos 
  async ngOnInit() {
    try {
      // Hacer petición
      const articles = await this.Article.get('/v1/articles');
      // La propiedad “articles” es igual a la petición
      this.articles = articles.articles;
    } catch (error) {
      console.error(error);
    }
  }

}
