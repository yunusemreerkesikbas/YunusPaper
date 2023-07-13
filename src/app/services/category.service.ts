import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {CategoryListResponseModel} from "@models/categoryListResponseModel";
import {environment} from "@environments/environment";
import {ListResponseModel} from "@models/listResponseModel";
import {News} from "@models/newsModel";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<CategoryListResponseModel> {
    let apiUrl = `https://newsapi.org/v2/top-headlines/sources?country=${environment.country}&apiKey=${environment.XApiKey}`
    return this.httpClient.get<CategoryListResponseModel>(apiUrl);
  }
  getNewsByCategory(category: string): Observable<ListResponseModel<News>> {
    let categoryUrl = `${environment.ApiBaseUrl}top-headlines?country=${environment.country}&category=${category}&apiKey=${environment.XApiKey}`
    return this.httpClient.get<ListResponseModel<News>>(categoryUrl);
  }

}
