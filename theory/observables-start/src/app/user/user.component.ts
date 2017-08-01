import { UsersService } from 'app/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    id: number;

    constructor(private route: ActivatedRoute,
        private usersService: UsersService) { }

    ngOnInit() {
        this.route.params
            .subscribe(
            (params: Params) => {
                this.id = +params['id'];
            }
            );
    }

    onActivate() {
        // success send the id to the observable for success response
        this.usersService.userActivated.next(this.id);
    }

}
