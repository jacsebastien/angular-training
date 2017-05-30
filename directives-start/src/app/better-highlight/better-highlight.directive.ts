import { 
  Directive, 
  OnInit, 
  Renderer2, 
  ElementRef, 
  HostListener,
  HostBinding 
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // access the DOM "backgroundColor" sub-property of "style" property 
  // and affect it to backgroundColor which is type of string with 'transparent' for default value
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // use of the renderer is a better approach of accessing the DOM
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  // listener for an event on the DOM element and define the methode which will be executed
  // take for argument the name of the event which we are waiting for
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');  
    this.backgroundColor = 'blue';  
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');    
    this.backgroundColor = 'transparent';
  }
}
