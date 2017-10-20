import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    // when the ALL path is empty, redirect to /recipes
    { path: '', component: HomeComponent },
    // use lasy loading to load the routes and components only if visited and not when app starts and implements guard
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard]},
    { path: 'shopping-list', component: ShoppingListComponent }
];

// forRoot is only used in root module, for featured modules use forChild
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
