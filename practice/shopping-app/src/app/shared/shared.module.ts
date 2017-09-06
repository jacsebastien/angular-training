import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';

// need to export modules to be able to access it from outside
@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports: [
        CommonModule,
        DropdownDirective
    ]
})
export class SharedModule {

}
