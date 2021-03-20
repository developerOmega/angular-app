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
  
  async ngOnInit() {
    try {
      const articles = await this.Article.get('/v1/articles');
      this.articles = articles.articles;
    } catch (error) {
      console.error(error);
    }
  }

}
