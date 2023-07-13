import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {News} from "@models/newsModel";
import {Category} from "@models/categoryModel";
import {NewsService} from "@services/news.service";
import {CategoryService} from "@services/category.service";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  news: News[] = []
  categories: Category[] = []
  uniqueCategory: any = []
  categoryList: Category[] = []
  isLoading = false
  constructor(
    private newsService: NewsService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCategories();
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
    this.isLoading = true
    this.newsService.getNews().subscribe((response) => {
      this.news = response.articles
      this.isLoading=false

    })
  }
  // kategoriye göre haber getir
  getNewsByCategory(category: string) {
    this.isLoading = true

    this.categoryService.getNewsByCategory(category).subscribe(response => {
      this.news = response.articles
      this.isLoading = false

    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categoryList = response.sources
      this.uniqueCategory = Array.from(new Set(this.categoryList.map(item => item.category))).map(category => {
        return this.categoryList.find(item => item.category === category)
      })

    })
  }



}
