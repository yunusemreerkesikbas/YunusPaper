import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/categoryModel';
import { News } from 'src/app/models/newsModel';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  uniqueCategory: any = []
  categories: Category[] = []
  currentCategory: Category
  news: News[] = []
  constructor(
    private categoryService: CategoryService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.getCategories();
  }
  // apideki datadan gelen kategorilerden unique olanları aldık. apideki datada aynı kategoriden birçok geliyor bunu da new Set oluşturarak uniqueleştirdik
  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.sources
      this.uniqueCategory = Array.from(new Set(this.categories.map(item => item.category))).map(category => {
        return this.categories.find(item => item.category === category)
      })

    })
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }
  // aktif kategori class'ını belirledik
  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return "category-list-item active"
    } else {
      return "category-list-item"
    }
  }
  // haber sayfası açılınca default olarak all categories gelmesini sağladık
  getAllCategoryClass() {
    if (!this.currentCategory) {
      return "category-list-item active"
    }
    else {
      return "category-list-item"
    }
  }


}
