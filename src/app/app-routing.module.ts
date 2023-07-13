import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "@components/pages/homepage/homepage.component";
import {NewsDetailComponent} from "@components/pages/news-detail/news-detail.component";
import {AboutComponent} from "@components/pages/about/about.component";

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
