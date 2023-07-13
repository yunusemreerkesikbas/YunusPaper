import { Component, Input, OnInit } from '@angular/core';
import { News } from '@models/newsModel';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css'],
})
export class NewsCardComponent implements OnInit {
  @Input() item: News;
  @Input() sliceEnd: number = 100;
  @Input() width: number = 200;
  @Input() height: number = 200;


  constructor() {}

  ngOnInit(): void {}
  handleImageError(event: any) {
    event.target.src = '/assets/img/default_news.jpg';
  }
}
