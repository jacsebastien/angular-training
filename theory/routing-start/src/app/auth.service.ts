// fake service which simulate authentication system
export class AuthService {
    loggedIn = false;

    // method to simulate the processe to know if we are logged in or not
    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                // resolve after 800 ms
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}