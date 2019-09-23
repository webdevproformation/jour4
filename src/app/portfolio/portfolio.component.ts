import { Component, OnInit } from '@angular/core';
import { ArticlesOnlineService } from '../service/articles-online.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolios

  constructor( private service : ArticlesOnlineService) {  }

  ngOnInit() {

    this.service.getAll().subscribe(
      (resultat) => {
        this.portfolios = resultat;
      }
    )
  }

}
