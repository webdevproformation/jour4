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

  onChangeTitre(titre)
  {
    console.log(titre.value);
    console.log(titre.valid);
  }

}
