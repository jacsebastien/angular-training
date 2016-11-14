import { NgModule }             from '@angular/core';
// Web app so we need BrowserModule
import { BrowserModule }        from '@angular/platform-browser';
// To allow froms creation
import { FormsModule }          from '@angular/forms';
// import our custom AppComponent
import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule 
  ],
  // list of all created components, pipes and directives
  declarations: [ 
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
