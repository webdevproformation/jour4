import { Component, OnInit } from '@angular/core';
import { ArticlesOnlineService } from '../service/articles-online.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-portfolio',
  templateUrl: './new-portfolio.component.html',
  styleUrls: ['./new-portfolio.component.css']
})
export class NewPortfolioComponent implements OnInit {

  isOk = false

  constructor( 
      private service : ArticlesOnlineService , 
      private router : Router) 
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
          this.router.navigate(['/portfolio'])
        }
      )
    }
  }



}
