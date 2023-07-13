import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ListResponseModel} from "@models/listResponseModel";
import {News} from "@models/newsModel";
import {environment} from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  isLoading:boolean = false;
  constructor(private httpClient: HttpClient) { }
  // apiden gelen datayı karşıla
  getNews(): Observable<ListResponseModel<News>> {
    let apiUrl = `${environment.ApiBaseUrl}top-headlines?country=${environment.country}&apiKey=${environment.XApiKey}`
    return this.httpClient.get<ListResponseModel<News>>(apiUrl);
  }



}
