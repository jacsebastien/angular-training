import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // use of the renderer is a better approach of accessing the DOM
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  // listener for an event on the DOM element and define the methode which will be executed
  // take for argument the name of the event which we are waiting for
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');    
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');    
  }
}
