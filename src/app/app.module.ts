import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { ArticlesLocalService } from './service/articles-local.service';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ArticleComponent,
    NotFoundComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : "" , component : HomepageComponent } ,
      { path : "article/:id" , component : ArticleComponent }, // :id => rendre l'url variable
      { path : "portfolio" , component : PortfolioComponent } , // ne pas mettre à la suite de notFound
      { path : "**" , component : NotFoundComponent }
    ]),
    HttpClientModule
  ],
  providers: [
    ArticlesLocalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
