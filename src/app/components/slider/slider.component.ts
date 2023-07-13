import {Component, Input, OnInit} from '@angular/core';
import {News} from "@models/newsModel";
import {NewsService} from "@services/news.service";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() news: News[]
  // constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    // this.getNews();
  }
  //apiden gelen haberleri getir
  // getNews() {
  //   this.newsService.getNews().subscribe((response) => {
  //     this.news = response.articles
  //     console.log(this.news)
  //
  //   })
  // }

}
