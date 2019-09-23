import { Component, OnInit } from '@angular/core';
import { ArticlesLocalService } from '../service/articles-local.service';
import { ActivatedRoute , Router } from "@angular/router" ;


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  articles
  nbArticleParPage = 2
  nbPagination

  constructor( 
      private service : ArticlesLocalService , 
      private route : ActivatedRoute ,
      private router : Router ) 
  {   

  }

  nbPage()
  {
    // Math.floor() // sol
    // Math.ceil() // plafond ceilling 
    return Math.ceil(this.service.getAll().length / this.nbArticleParPage ) ;

  }

  ngOnInit() {
    //this.route.paramMap.subscribe( (params) => {  params })
    this.route.queryParams.subscribe( (query) => { 
      //console.log(query.page);
       if( Object.keys(query).length !== 0)
      {
        // affiche moi les 2 premiers articles
       // this.articles = this.service.getAll();
        this.articles = this.service.getFromTo();
      }
      else (query.page)
      {
        const numPage = query.page ;
        
        console.log(query.page)
        const result = this.service.getFromTo( numPage , this.nbArticleParPage)
        
        if(result.length > 0)
        {
          this.articles = result;
        }
        else
        {
          this.router.navigate(["/not-found"]);
        }
        
        // afficher les deux articles de la page numPage
      }
    } )
  }

}
