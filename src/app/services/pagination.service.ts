import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ListResponseModel} from "@models/listResponseModel";
import {News} from "@models/newsModel";
import {environment} from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaginationNewsService {

  constructor(
    private httpClient: HttpClient
  ) { }
  // apiden gelen haberleri sayfalandırmaya uygun olarak karşıla
  getNewsByPagination(page: number, perPage: number): Observable<ListResponseModel<News>> {
    let apiUrl = `${environment.ApiBaseUrl}top-headlines?country=${environment.country}&language=${environment.language}&page=${page}&pageSize=${perPage}&apiKey=${environment.XApiKey}`;

    return this.httpClient.get<ListResponseModel<News>>(apiUrl);
  }

}
