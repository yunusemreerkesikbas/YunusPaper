import { Component, OnInit } from '@angular/core';
import { News } from "@models/newsModel";
import { NewsService } from "@services/news.service";
import { PaginationNewsService } from "@services/pagination.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  news: News[] = []
  topNews: News[] = []
  filterText: string = "";
  perPage: number = 10
  totalResults: number = 0
  page: number = 1
  constructor(private newsService: NewsService, private paginationNewsService: PaginationNewsService) { }
  ngOnInit(): void {
    this.getTopNews();
    this.getNewsByPagination()
  }
  getTopNews() {
    this.newsService.getNews().subscribe((response) => {
      this.topNews = response.articles
      console.log(this.topNews)
    })
  }

  getNewsByPagination() {
    this.paginationNewsService.getNewsByPagination(this.page, this.perPage).subscribe((response) => {
      this.news = response.articles
      this.totalResults = response.totalResults
    })
  }
  pageChangeEvent(event: number) {
    this.page = event;
    this.getNewsByPagination();
    console.log(this.page);
  }


}
