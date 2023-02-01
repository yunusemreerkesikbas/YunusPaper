import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { CategoryComponent } from './components/category/category.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'category/all-categories', component: NewsDetailComponent },
  { path: 'category/:category', component: NewsDetailComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
