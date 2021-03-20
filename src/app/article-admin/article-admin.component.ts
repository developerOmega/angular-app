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

  async ngOnInit() {
    try {
      const data = await this.Article.get('/v1/articles');
      this.articles = data.articles;
    } catch (error) {
      console.error(error);
    }
  }

  async createOrEditArticle() {
    try {
      const data = this.selectArticle._id == 0 ? 
        await this.Article.post('/v1/articles', this.selectArticle) :
        await this.Article.put(`/v1/articles/${this.selectArticle._id}`, this.selectArticle);

      if(this.selectArticle._id == 0) {
        this.articles.push(data.article);
      }
      
      this.cleanSelectArticle()
    } catch (error) {
      console.error(error);
    }
  }

  async deleteAricle() {
    try {
      await this.Article.delete(`/v1/articles/${this.selectArticle._id}`);
      const articles = this.articles.filter(article => this.selectArticle != article);
      this.articles = articles;
      this.cleanSelectArticle();
    } catch (error) {
      console.error(error);
    }
  }


  cleanSelectArticle() {
    this.selectArticle = new Article;
  }

  openForEdit(article: Article) {
    this.selectArticle = article;
  }

}
