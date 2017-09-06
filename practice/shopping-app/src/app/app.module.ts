import { AuthModule } from './auth/auth.module';
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpModule }       from '@angular/http';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipesModule } from './recipes/recipes.module';

import { AppComponent }             from './app.component';
import { HeaderComponent }          from './header/header.component';

import { ShoppingListService }  from './shopping-list/shopping-list.service';
import { RecipeService }        from './recipes/recipe.service';
import { DataStorageService }   from './shared/data-storage.service';
import { AuthService }          from './auth/auth.service';
import { AuthGuard }            from './auth/auth-guard.service';

// Use RecipesModule to wrap all recipes features
// import it in app module to avoid import of a lot of components and clean up app module
// use custom sharedModule to access some directives needed in app module and featured modules like recipes
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        RecipesModule,
        SharedModule,
        ShoppingListModule,
        AuthModule
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
