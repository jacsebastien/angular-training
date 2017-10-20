import { Component } from '@angular/core';
import { Response } from '@angular/http';
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
            (response: Response) => {
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
