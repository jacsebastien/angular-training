import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('f') signupForm: NgForm;

    defaultQuestion: string = "pet";
    answer: string;
    genders: string[] = ["male", "female"];

    suggestUserName() {
        const suggestedName = 'Superuser';
        // set all values of the form
        // this.signupForm.setValue({
        //     userData: {
        //         username: suggestedName,
        //         email: ''
        //     },
        //     secret: 'pet',
        //     questionAnswer: '',
        //     gender: 'male'
        // })
        
        // set only selected values and don't override all the form
        this.signupForm.form.patchValue({
            userData: {
                username: suggestedName
            }
        });
    }

    // triggered when the form is submitted and get reference to it for arguments
    // onSubmit(form: NgForm) {
    //     console.log(form);
    // }

    // access to the form without passing argument thx to ViewChild
    onSubmit() {
        console.log(this.signupForm);
    }
}
