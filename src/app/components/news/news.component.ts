import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'src/app/models/listResponseModel';
// import { initialNews } from 'src/app/models/initialNewsModel';
import { News } from 'src/app/models/newsModel';
import { NewsService } from 'src/app/services/news.service';
import { HomepageComponent } from '../homepage/homepage.component';
import { PaginationNewsService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News[] = [];
  filterText: string = "";
  perPage: number = 10
  totalResults: number = 0
  page: number = 1

  constructor(private paginationNewsService: PaginationNewsService, private homepage: HomepageComponent) { }
  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.paginationNewsService.getNewsByPagination(this.page, this.perPage).subscribe((response) => {
      this.news = response.articles
      this.totalResults = response.totalResults

    })
  }
  pageChangeEvent(event: number) {
    this.page = event;
    this.getNews();
  }

}
