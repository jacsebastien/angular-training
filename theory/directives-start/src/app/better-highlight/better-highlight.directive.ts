import { 
  Directive, 
  OnInit, 
  Renderer2, 
  ElementRef, 
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  // create an alias that correspond to the name of the directive
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  
  // access the DOM "backgroundColor" sub-property of "style" property 
  // and affect it to backgroundColor which is type of string
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // use of the renderer is a better approach of accessing the DOM
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  // listener for an event on the DOM element and define the methode which will be executed
  // take for argument the name of the event which we are waiting for
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');  
    this.backgroundColor = this.highlightColor;  
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');    
    this.backgroundColor = this.defaultColor;
  }
}
