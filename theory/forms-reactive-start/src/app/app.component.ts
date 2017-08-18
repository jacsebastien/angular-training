import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    genders: string[] = ['male', 'female'];
    forbiddenUsernames: string[] = ['Chris', 'Anna'];

    // declare an angular form
    signupForm: FormGroup;

    ngOnInit() {
        // init form and create form controls with some default values and validators
        this.signupForm = new FormGroup({
            'userData': new FormGroup({
                // forbiddenNames is not called inside AppComponent but is called by Angular when its checks the validity so we need to bind(this) to be sure that "this" is referencing AppComponent inside the validator function
                // pass a reference to the function and don't execute it
                'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
                // use 3rd argument to pass async validator
                'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
            }),
            'gender': new FormControl('male'),
            'hobbies': new FormArray([])
        });

        // react on value changes, can be called on individual form control
        // this.signupForm.valueChanges.subscribe(
        //     value => console.log(value)
        // );

        // same but on status
        this.signupForm.statusChanges.subscribe(
            status => console.log(status)
        );

        // set all form's data
        this.signupForm.setValue({
            'userData': {
                'username': 'Nash',
                'email': 'nash@mymail.com'
            },
            'gender': 'male',
            'hobbies': []
        });

        // set only some data
        this.signupForm.patchValue({
            'userData': {
                'username': 'Strife'
            }
        });
    }

    onSubmit() {
        console.log(this.signupForm);
        this.signupForm.reset({'gender': 'male'});
    }

    onAddHobby() {
        // create a new FormControl without any value
        const control = new FormControl(null, Validators.required);

        // access to hobbies telling typescript that this is a FormArray and push it the new control
        (<FormArray>this.signupForm.get('hobbies')).push(control);
    }

    /*  create validator

        recieve FormControl type as argument
        return an object which can have multiple keys (that are interpreted as a string) and the value of those keys are type of boolean
    */
    forbiddenNames(control: FormControl): {[s: string]: boolean} {
        // if control value is part of forbidden array
        if(this.forbiddenUsernames.indexOf(control.value) !== -1) {
            return {'isNameForbidden': true};
        }

        // if validation is successfull we need to return null and not false
        return null;
    }

    // create async validator which returns a Promise or an Observable
    forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'test@test.com') {
                    resolve({'isEmailForbidden': true});
                } else {
                    resolve(null);
                }
            }, 1500);
        });

        return promise;
    }
}
