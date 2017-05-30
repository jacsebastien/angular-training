import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    // toggle from true to false to true on click event
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}