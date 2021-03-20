import { Component, OnInit, Input } from '@angular/core';
import {Article} from '../../models/article';

@Component({
  selector: 'app-article-tag',
  templateUrl: './article-tag.component.html',
  styleUrls: ['./article-tag.component.css']
})
export class ArticleTagComponent implements OnInit {

  @Input() 
  article:Article  = new Article;

  constructor() { }

  ngOnInit(): void {
  }

}
