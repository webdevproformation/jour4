import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-portfolio',
  templateUrl: './new-portfolio.component.html',
  styleUrls: ['./new-portfolio.component.css']
})
export class NewPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  onSubmitNewPortfolio($event,f)
  {
    $event.preventDefault();
    if(f.valid)
    {
      console.log(JSON.stringify(f.value));
      // appeler l'API pour faire le POST 
    }
    
  }

  onChangeTitre(titre)
  {
    console.log(titre.value);
    console.log(titre.valid);
  }

}
