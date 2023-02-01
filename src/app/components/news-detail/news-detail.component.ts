import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/categoryModel';
import { News } from 'src/app/models/newsModel';
import { CategoryService } from 'src/app/services/category.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  news: News[] = []
  categories: Category[] = []

  constructor(
    private newsService: NewsService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // tıklanan kategoriye göre haber çekme
    this.activatedRoute.params.subscribe(params => {
      if (params["category"]) {
        this.getNewsByCategory(params["category"])
      }
      else {
        this.getNews();
      }
    })
  }
  // tüm haberleri getir
  getNews() {
    this.newsService.getNews().subscribe((response) => {
      this.news = response.articles

    })
  }
  // kategoriye göre haber getir
  getNewsByCategory(category: string) {
    this.categoryService.getNewsByCategory(category).subscribe(response => {
      this.news = response.articles
    })
  }

}
