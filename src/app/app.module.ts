import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxPaginationModule } from 'ngx-pagination';
import {SliderComponent} from "@components/slider/slider.component";
import {NewsComponent} from "@components/news/news.component";
import {CategoryComponent} from "@components/category/category.component";
import {HomepageComponent} from "@components/pages/homepage/homepage.component";
import {NewsDetailComponent} from "@components/pages/news-detail/news-detail.component";
import {FilterPipePipe} from "@pipes/filter-pipe.pipe";
import {AboutComponent} from "@components/pages/about/about.component";
import {NgOptimizedImage} from "@angular/common";
import {SearchComponent} from "@components/search/search.component";
import {NewsCardComponent} from "@components/news-card/news-card.component";
import {NavbarComponent} from "@components/navbar/navbar.component";
import {LoadingComponent} from "@components/loading/loading.component";

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavbarComponent,
    NewsComponent,
    CategoryComponent,
    HomepageComponent,
    NewsDetailComponent,
    FilterPipePipe,
    AboutComponent,
    SearchComponent,
    NewsCardComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgOptimizedImage


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
