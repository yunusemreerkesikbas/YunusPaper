import { Component, Input, OnInit } from '@angular/core';
import { Category } from '@models/categoryModel';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input() uniqueCategory: any = [];
  @Input() categoryList: Category[] = [];
  currentCategory: Category;

  constructor() {}

  ngOnInit(): void {}

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  // aktif kategori class'ını belirledik
  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'category-list-item active';
    } else {
      return 'category-list-item';
    }
  }

  // haber sayfası açılınca default olarak all categories gelmesini sağladık
  getAllCategoryClass() {
    if (!this.currentCategory) {
      return 'category-list-item active';
    } else {
      return 'category-list-item';
    }
  }
}
