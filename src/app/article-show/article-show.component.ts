import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article';
import  Request from '../../assets/request';

@Component({
  selector: 'app-article-show',
  templateUrl: './article-show.component.html',
  styleUrls: ['./article-show.component.css']
})
export class ArticleShowComponent implements OnInit {
  Request: Request = new Request;
  article: Article = new Article;
  user: Object = {};
  constructor( private route: ActivatedRoute ) { 
  }
  
  // Al inicializar página, obtener artículo en por el parámetro id de la ruta 
  async ngOnInit(){
    // Obtener id
    let id = this.route.snapshot.paramMap.get('id');
    try {
      // Hacer petición
      const data = await this.Request.get(`/v1/articles/${id}`);
      
      // La propiedad “article” es igual a la petición
      this.article = data.article;
    } catch (error) {
      console.error(error);
    }
    
  }

}
