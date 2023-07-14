import {Component, Input, OnInit} from '@angular/core';
import {News} from "@models/newsModel";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() news: News[]

  ngOnInit(): void {
  }
  handleImageError(event: any) {
    event.target.src = '/assets/img/default_news.jpg';
  }
}
