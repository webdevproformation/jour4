import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http' ;

@Component({
  selector: 'app-portfolio-one',
  templateUrl: './portfolio-one.component.html',
  styleUrls: ['./portfolio-one.component.css']
})
export class PortfolioOneComponent implements OnInit {

  portfolio

  constructor( private http: HttpClient , private route : ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params) =>{

      const id = params.get("id");
      
      this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).subscribe(
        (resultat) => {
          this.portfolio = resultat;
          console.log(resultat);
        }
      )
    })

  
  }

}
