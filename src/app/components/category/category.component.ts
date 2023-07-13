import { HttpClient } from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Category} from "@models/categoryModel";
import {CategoryService} from "@services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() uniqueCategory: any = []
  @Input() categoryList: Category[] = []
  currentCategory: Category

  constructor(
    private categoryService: CategoryService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

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
