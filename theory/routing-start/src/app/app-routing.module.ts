import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
        { path: ':id/:name', component: UserComponent },
    ] },
    { path: 'servers', component: ServersComponent, children: [
        // nested route /servers/:id
        { path: ':id', component: ServerComponent },
        { path: ':id/edit', component: EditServerComponent }
    ] },
    { path:'not-found', component: PageNotFoundComponent },
    // redirect all unknown routes to an existing route by using wildcards and providing the redirect url
    // use pathMatch: 'full' to be sure that the entierely path match with no known route
    { path:'**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}