import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http' ;


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolios

  constructor( private http: HttpClient) { }

  ngOnInit() {

    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
      (resultat) => {
 
        this.portfolios = resultat;
      }
    )
  }

}
