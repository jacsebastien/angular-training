import { NgModule }       from '@angular/core';
// Web app so we need BrowserModule
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

// the file which manage routes
import { AppRoutingModule }     from './app-routing.module';

// import our custom AppComponent
import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroService }          from './hero.service';

@NgModule({
  //  list of angular native modules and created ones (like routing)
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  // list of all created components, pipes and directives
  declarations: [ 
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  // list of services needed to manage data from db/files/... available to ALL components
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
