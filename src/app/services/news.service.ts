import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { News } from '../models/newsModel';
import { Category } from '../models/categoryModel';
import { CategoryListResponseModel } from '../models/categoryListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }
  // apiden gelen datayı karşıla
  getNews(): Observable<ListResponseModel<News>> {
    let apiUrl = `${environment.ApiBaseUrl}top-headlines?country=tr&apiKey=${environment.XApiKey}`
    return this.httpClient.get<ListResponseModel<News>>(apiUrl);
  }



}
