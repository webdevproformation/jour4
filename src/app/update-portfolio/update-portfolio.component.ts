import { Component, OnInit } from '@angular/core';
import { ArticlesOnlineService } from '../service/articles-online.service';
import { ActivatedRoute , Router } from '@angular/router';



@Component({
  selector: 'app-update-portfolio',
  templateUrl: './update-portfolio.component.html',
  styleUrls: ['./update-portfolio.component.css']
})
export class UpdatePortfolioComponent implements OnInit {

  portfolio ;

  constructor( 
      private service : ArticlesOnlineService , 
      private route : ActivatedRoute ,
      private router : Router) 
  { }

  ngOnInit() {
    this.route.paramMap.subscribe( (params) => {
      const id = params.get("id");
      this.service.getOne(id).subscribe( (result) => {
        
        this.portfolio = result ;
      
      },(error) => {
        //console.log( "Erreur inattendue", error.status);
        this.router.navigate(["/not-found"]);
      })
    })
  }

}
