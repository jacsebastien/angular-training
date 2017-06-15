import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
    server: { id: number, name: string, status: string };

    constructor(private serversService: ServersService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {
        // user "+" operator to convert the id passed like a string to a number
        const serverId = +this.route.snapshot.params['id'];
        this.server = this.serversService.getServer(serverId);

        // get new data whenever params changed
        this.route.params
            .subscribe(
                (params: Params) => {
                    // get new server with string id converted to number
                    this.server = this.serversService.getServer(+params['id']);
                }
            );
    }

    onEdit() {
        // tell to navigate to edit relative to the active route which is /servers/:id 
        // => (/servers/:id/edit) 
        // queryParamsHandling allow to preserve previous queryParams in the url
        this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
    }

}
