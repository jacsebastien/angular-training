import { RouterModule, Routes } from '@angular/router';

import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';

const APP_ROUTES: Routes = [
    {
        // for the index "/" route
        path: '',
        // redirect to the "/collection" which is linked to the CollectionComponent
        redirectTo: '/collection',
        // use this route only if the complete path math to nothing => is empty
        pathMatch: 'full'
    },
    {
        path: 'collection',
        component: CollectionComponent
    },
    {
        path: 'market',
        component: MarketComponent
    }
];

// register routes as a route module and store it in an exported "routing" property
export const routing = RouterModule.forRoot(APP_ROUTES);