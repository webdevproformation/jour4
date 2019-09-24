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
import { PortfolioOneComponent } from './portfolio-one/portfolio-one.component';
import { ArticlesOnlineService } from './service/articles-online.service';
import { MorePipe } from './more.pipe';
import { NewPortfolioComponent } from './new-portfolio/new-portfolio.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ArticleComponent,
    NotFoundComponent,
    PortfolioComponent,
    PortfolioOneComponent,
    MorePipe,
    NewPortfolioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : "" , component : HomepageComponent } ,
      { path : "article/:id" , component : ArticleComponent }, // :id => rendre l'url variable
      { path : "portfolio/new" , component : NewPortfolioComponent } , 
      { path : "portfolio/:id" , component : PortfolioOneComponent } , 
      { path : "portfolio" , component : PortfolioComponent } , // ne pas mettre à la suite de notFound
      { path : "**" , component : NotFoundComponent }
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ArticlesLocalService,
    ArticlesOnlineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
