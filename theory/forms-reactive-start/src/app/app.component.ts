import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

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
            'userData': new FormGroup({
                'username': new FormControl(null, Validators.required),
                'email': new FormControl(null, [Validators.required, Validators.email])
            }),
            'gender': new FormControl('male'),
            'hobbies': new FormArray([])
        });
    }

    onSubmit() {
        console.log(this.signupForm);
    }

    onAddHobby() {
        // create a new FormControl without any value
        const control = new FormControl(null, Validators.required);

        // access to hobbies telling typescript that this is a FormArray and push it the new control
        (<FormArray>this.signupForm.get('hobbies')).push(control);
    }
}
