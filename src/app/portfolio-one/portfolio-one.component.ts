import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ArticlesOnlineService } from '../service/articles-online.service';


@Component({
  selector: 'app-portfolio-one',
  templateUrl: './portfolio-one.component.html',
  styleUrls: ['./portfolio-one.component.css']
})
export class PortfolioOneComponent implements OnInit {

  portfolio

  constructor( 
      private service : ArticlesOnlineService, 
      private route : ActivatedRoute) 
  { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) =>{

      const id = params.get("id");
      
      this.service.getOne(id).subscribe(
        (resultat) => {
          this.portfolio = resultat;
          console.log(resultat);
        }
      )
    });
  }

}
