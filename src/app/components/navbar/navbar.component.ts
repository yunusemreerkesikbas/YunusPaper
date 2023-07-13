import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  headerData: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('/assets/navbar.json').subscribe(data => {
      this.headerData = data;
    });
  }
}
