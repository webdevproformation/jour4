import { Component, OnInit } from '@angular/core';
import { ArticlesOnlineService } from '../service/articles-online.service';

@Component({
  selector: 'app-new-portfolio',
  templateUrl: './new-portfolio.component.html',
  styleUrls: ['./new-portfolio.component.css']
})
export class NewPortfolioComponent implements OnInit {

  isOk = false

  constructor( 
      private service : ArticlesOnlineService ) 
  { }

  ngOnInit() {
    
  }

  onSubmitNewPortfolio($event,f)
  {
    $event.preventDefault();
    if(f.valid)
    {
      const portfolio = JSON.stringify(f.value);
      // appeler l'API pour faire le POST 
      this.service.create(portfolio).subscribe(
        (result) => {
          console.log(result);
          this.isOk = true;
      
        }
      )
    }
  }



}
