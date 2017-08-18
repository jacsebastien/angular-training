import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    genders = ['male', 'female'];

    // create an angular form
    signupForm: FormGroup;

    ngOnInit() {
        // init form and create form controls with some default values and validators
        this.signupForm = new FormGroup({
            'username': new FormControl(null, Validators.required),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'gender': new FormControl('male')
        });
    }

    onSubmit() {
        console.log(this.signupForm);
    }
}
