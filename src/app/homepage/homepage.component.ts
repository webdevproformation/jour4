import { Component, OnInit } from '@angular/core';
import { ArticlesLocalService } from '../service/articles-local.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  articles
  nbArticleParPage = 2 


  constructor( service : ArticlesLocalService) {

    this.articles = service.getAll();
   }

  nbPage()
  {
    return this.articles.length / this.nbArticleParPage ;
  }

  ngOnInit() {
  }

}
