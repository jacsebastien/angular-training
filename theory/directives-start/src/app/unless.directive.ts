import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // input property is binded to a method that will be applied each time the property changes  
  @Input() set appUnless(condition: boolean) {
    // we will show template if condition is false (unless)
    if(!condition) {
      // create a view in the container which contains the template
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // remove everything from this place of the dom
      this.vcRef.clear();
    }

  }
  // TemplateRef is "what should be rendered?" and ViewContainerRef is "where it should be rendered?"
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
