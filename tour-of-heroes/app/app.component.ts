import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    // show the app inside <my-app> tag in HTML
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
    title = 'Tour of Heroes';
}