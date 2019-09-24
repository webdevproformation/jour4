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

  onClickDelete(portfolio)
  {
    //console.log(id);
    this.service.delete(portfolio.id).subscribe(
      (resultat) => {
        console.log(resultat);
        // ces lignes que nous ajoutons sont spéciales pour l'API JSONPlaceholder
        let index = this.portfolios.indexOf(portfolio);
        this.portfolios.splice(index,1) ;

        // dans l'api que nous avons réalisés
        // this.portfolios = resultat;
        // lorsque l'article est supprimé on retourne tous les articles
      }
    )
  }

}
