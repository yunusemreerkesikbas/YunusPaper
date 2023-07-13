import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutData: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('/assets/about.json').subscribe(data => {
      this.aboutData = data;
      console.log(this.aboutData)
    });
  }
}
