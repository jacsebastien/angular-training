import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';   // needed to work with Observable operators like "interval"

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        // create an observable which emit numbers each seconds
        const myNumbers = Observable.interval(1000);

        myNumbers.subscribe(
            (number: number) => {
                console.log(number);
            }
        );
    }

}
