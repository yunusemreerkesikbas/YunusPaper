import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { CategoryComponent } from './components/category/category.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { AboutComponent } from './components/about/about.component';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    NewsComponent,
    CategoryComponent,
    HomepageComponent,
    NewsDetailComponent,
    FilterPipePipe,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
