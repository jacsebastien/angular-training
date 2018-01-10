import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducers';

// Use RecipesModule to wrap all recipes features
// import it in app module to avoid import of a lot of components and clean up app module
// use custom sharedModule to access some directives needed in app module and featured modules like recipes
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        ShoppingListModule,
        AuthModule,
        CoreModule,
        // import the store module and use forRoot to be equally loaded and not leasely
        StoreModule.forRoot({shoppingList: shoppingListReducer}) // add all the reducers inside the object
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
