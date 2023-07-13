import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() filterTextChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() filterText: string = '';

  onFilterTextChange() {
    this.filterTextChange.emit(this.filterText);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
