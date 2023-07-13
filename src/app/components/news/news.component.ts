import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from "@models/newsModel";
import { PaginationNewsService } from "@services/pagination.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  @Output() pageChangeEvent: EventEmitter<number> = new EventEmitter<number>();
  @Input() news: News[];
  @Input() filterText: string = '';
  @Input() perPage: number;
  @Input() totalResults: number;
  @Input() page: number;

  onPageChange(event: number) {
    this.pageChangeEvent.emit(event);
  }

  onFilterTextChange(filterText: string) {
    this.filterText = filterText;
  }

  ngOnInit(): void {
  }

}
