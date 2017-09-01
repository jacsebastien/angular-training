import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    token: string;

    constructor() { }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            error => console.log(error)
        );
    }

    singinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
            // set the token property of this service after signin
            firebase.auth().currentUser.getToken()
            .then((token: string) => this.token = token);
        })
        .catch(error => console.log(error));
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
