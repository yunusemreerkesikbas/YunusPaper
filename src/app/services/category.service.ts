import { Injectable } from '@angular/core';
import { News } from '../models/newsModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CategoryListResponseModel } from '../models/categoryListResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<CategoryListResponseModel> {
    let apiUrl = `https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=${environment.XApiKey}`
    return this.httpClient.get<CategoryListResponseModel>(apiUrl);
  }
  getNewsByCategory(category: string): Observable<ListResponseModel<News>> {
    let categoryUrl = `${environment.ApiBaseUrl}top-headlines?country=tr&category=${category}&apiKey=${environment.XApiKey}`
    return this.httpClient.get<ListResponseModel<News>>(categoryUrl);
  }

}
