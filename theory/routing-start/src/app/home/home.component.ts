import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onLoadServers() {
        // complex calculation

        // array with the different parts of the url tha we will navigate on
        this.router.navigate(['/servers']);
    }

    onLoadServer(id: number) {
        // complex calculation

        this.router.navigate(
            ['/servers', id, 'edit'], 
            { 
                queryParams: { allowEdit: '1' },
                fragment: 'loading'
            }
        );
    }

}
