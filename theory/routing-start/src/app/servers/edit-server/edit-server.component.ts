import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from "app/servers/edit-server/can-deactivate-guard.service";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html',
    styleUrls: ['./edit-server.component.css']
})
// implements CanComponentDeactivate interface to force our component to use canDeactivate method
export class EditServerComponent implements OnInit, CanComponentDeactivate {
    server: { id: number, name: string, status: string };
    serverName = '';
    serverStatus = '';
    allowEdit = false;
    // used to know if we change something without saving it
    changesSaved = false;

    constructor(private serversService: ServersService,
                private route: ActivatedRoute,
                private router: Router) {         
    }

    ngOnInit() {
        // get dirct access to data sent in the url on component creation
        console.log(this.route.snapshot.queryParams);
        console.log(this.route.snapshot.fragment);

        // subscribe on route parameters changes to get updated one and processed it
        this.route.queryParams
            .subscribe(
                (queryParams: Params) => {
                    this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
                }
            );
        this.route.fragment.subscribe();
        const id = +this.route.snapshot.params['id'];
        this.server = this.serversService.getServer(id);
        // TODO: Subscribe route params to update id if params change
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
    }

    onUpdateServer() {
        this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
        // make changes as saved
        this.changesSaved = true;
        // navigate to the parent route
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    // use canDeactivate method implemented with CanComponentDeactivate interface to know if our
    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        // if not allowed to edit, no edit is done so user can leave the view anyway
        if(!this.allowEdit) {
            return true;
        }
        // if one of the informations about server is changed AND changes are not saved
        if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
            // ask the the user and retrun is resopnse
            return confirm("Do youwant to discard your changes?");
        // if nothings changed of if changes were saved
        } else {
            return true;
        }
    }

}
