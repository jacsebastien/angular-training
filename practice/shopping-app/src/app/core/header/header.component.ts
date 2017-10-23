import { Component } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { AuthService } from 'app/auth/auth.service';
import { DataStorageService } from 'app/shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    authSrv: AuthService;

    constructor(
        private dataStorageService: DataStorageService,
        private authService: AuthService
    ) {
        this.authSrv = authService;
    }

    onStoreData() {
        this.dataStorageService.storeDRecipes()
        .subscribe(
            // (response: HttpEvent<Object>) => {
            //     console.log(response.type === HttpEventType.Sent);
            //     console.log(response.type === HttpEventType.Response);
            // }
            (response) => {
                console.log(response);
            }
        );
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }
}
