import { NgModule }       from '@angular/core';
// Web app so we need BrowserModule
import { BrowserModule }  from '@angular/platform-browser';
// To allow froms creation
import { FormsModule }    from '@angular/forms';
// import our custom AppComponent
import { AppComponent }   from './app.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
