import { NgModule }       from '@angular/core';
// Web app so we need BrowserModule
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

// the file which manage routes
import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api (fake server)
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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
    AppRoutingModule,
    HttpModule,
    // InMemoryWebApiModule replaces the default Http client backend with data from InMemoryDataService
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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
