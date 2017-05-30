import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  //article: Article;

  constructor() {

  }

  ngOnInit() {
  }

  public voteUp(e) {
    e.preventDefault();
    this.article.voteUp();
    return false;
  }

  public voteDown(e) {
    e.preventDefault();
    this.article.voteDown();
    return false;
  }

}
