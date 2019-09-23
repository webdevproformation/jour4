import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from "@angular/router"; // permet de récupérer la partie variable de l'url
import { ArticlesLocalService } from '../service/articles-local.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article
  // Dans la documentation officielle, il ne faut pas faire de traitement dans le constructeur
  // juste appeler les services et les modules ActivatedRoute
  constructor( private route : ActivatedRoute , 
            private service : ArticlesLocalService ,
            private router : Router
            ) 
  {}

    // cycle de vie du composant 
    // cette méthode va être appelée que lorsque le composant s'affiche à l'écran
    // Dans la documentation officielle, il faut appeler ici toute ce que l'on a besoin
    // pas de le constructeur 
  ngOnInit() {
    // pas callback / promise
    // Observateur // Observable
    this.route.paramMap.subscribe( ( params ) =>{ 
      const id = params.get("id");
      //console.log(this.service.get(id))
      
      if( Object.keys(this.service.get(id)).length !== 0 )
      {
        this.article = this.service.get(id) ;
      }
      else
      {
        // si l'article n'existe pas alors de rediriger vers l'url /not-found
        this.router.navigate(["/not-found"]);
      }
    })

    // express  // fonction avec un paramètre et un callback => programmation Asynchrone 
    // router.get("/:id", callback(req, resp) => {})
  }

  onClickHome()
  {
    this.router.navigate(['/']);
  }

}
