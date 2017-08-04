import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    suggestUserName() {
        const suggestedName = 'Superuser';
    }

    // triggered when the form is submitted and get reference to it for arguments
    onSubmit(form: NgForm) {
        console.log(form);
    }
}
