import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) { }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            error => console.log(error)
        );
    }

    singinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
            this.router.navigate(['/']);
            // set the token property of this service after signin
            firebase.auth().currentUser.getToken()
            .then((token: string) => this.token = token);
        })
        .catch(error => console.log(error));
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }

    getToken() {
        firebase.auth().currentUser.getToken()
        .then(response => {
            firebase.auth().currentUser.getToken()
            .then((token: string) => this.token = token);
        });
        // danger: risk of returning an expired token cause we don't wait for promise before returning token
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
