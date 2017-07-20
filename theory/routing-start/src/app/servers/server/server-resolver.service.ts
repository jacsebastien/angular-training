import { Injectable } from '@angular/core';
import { ServersService } from './../servers.service';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
// implements Resolve to specify what's resolved at the end with its type
export class ServerResolver implements Resolve<Server> {
    // use the service to get server informations
    constructor(private serverService: ServersService) {}
    // resolve the server
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.serverService.getServer(+route.params['id']);
    }
}