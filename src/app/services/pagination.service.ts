import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { News } from '../models/newsModel';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaginationNewsService {

  constructor(
    private httpClient: HttpClient
  ) { }
  // apiden gelen haberleri sayfalandırmaya uygun olarak karşıla 
  getNewsByPagination(page: number, perPage: number): Observable<ListResponseModel<News>> {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=tr&language=tr&page=${page}&pageSize=${perPage}&apiKey=${environment.XApiKey}`;

    return this.httpClient.get<ListResponseModel<News>>(apiUrl);
  }

}
