import { Component, OnInit } from '@angular/core';
import { ArticlesLocalService } from '../service/articles-local.service';
import { ActivatedRoute } from "@angular/router" ;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  articles
  nbArticleParPage = 2 


  constructor( 
      private service : ArticlesLocalService , 
      private route : ActivatedRoute) 
  {   }

  nbPage()
  {
    return Math.floor(this.articles.length / this.nbArticleParPage ) ;
  }

  ngOnInit() {
    //this.route.paramMap.subscribe( (params) => {  params })
    this.route.queryParams.subscribe( (query) => { 
      //console.log(query.get("page"));
       if( Object.keys(query).length !== 0)
      {
        // affiche moi les 2 premiers articles
        this.articles = this.service.getAll();
      }
      else (query.page)
      {
        const numPage = query.page ;
        this.articles = this.service.getAll();
        // afficher les deux articles de la page numPage
      }
    } )
  }

}
