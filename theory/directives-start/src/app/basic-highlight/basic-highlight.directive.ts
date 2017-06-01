import { Directive, ElementRef, OnInit } from '@angular/core';

// need to put the selector into [] to tell angular to check for this attribute in html and apply directive on it
@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    // get ref of the element on wich we add the directive in template
    constructor(private elementRef: ElementRef) {}
    
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor ='green';
    }
    
}