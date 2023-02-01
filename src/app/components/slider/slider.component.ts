import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/models/newsModel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  news: News[] = []
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }
  //apiden gelen haberleri getir
  getNews() {
    this.newsService.getNews().subscribe((response) => {
      this.news = response.articles

    })
  }

}
