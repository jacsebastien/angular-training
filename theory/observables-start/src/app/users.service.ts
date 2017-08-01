import { Subject } from "rxjs/Subject";

export class UsersService {
    // a subject is an observable AND an observer at the same time
    // so it can emit AND subscribe
    userActivated = new Subject();
}