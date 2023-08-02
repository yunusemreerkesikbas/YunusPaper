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
  perPage: number = 10
  totalResults: number = 0
  page: number = 1
  isLoading = false

  constructor(private newsService: NewsService, private paginationNewsService: PaginationNewsService) { }
  ngOnInit(): void {
    this.getTopNews();
    this.getNewsByPagination()
  }
  getTopNews() {
    this.isLoading = true;
    this.newsService.getNews().subscribe((response) => {
      this.topNews = response.articles
      this.isLoading = false;

    })
  }

  getNewsByPagination() {
    this.isLoading = true;
    this.paginationNewsService.getNewsByPagination(this.page, this.perPage).subscribe((response) => {
      this.news = response.articles
      this.totalResults = response.totalResults
      this.isLoading = false
    })
  }
  pageChangeEvent(event: number) {
    this.page = event;
    this.getNewsByPagination();
  }


}
