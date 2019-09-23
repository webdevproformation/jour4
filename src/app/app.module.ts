import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { ArticlesLocalService } from './service/articles-local.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : "" , component : HomepageComponent }
    ])
  ],
  providers: [
    ArticlesLocalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
