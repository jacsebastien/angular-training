import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const recipesRoutes: Routes = [
    { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        // new need to be before :id to avoid Angular confusing between route part and parameter
        // { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        // { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
        { path: ':id/edit', component: RecipeEditComponent }
    ] }, // /recipes
];

// need to use "forChild" and not "forRoot" because we are not in root module
@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule {

}
