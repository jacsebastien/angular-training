import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native 
  // None disable the default Emulated encapsulation that create DOM tags propeties to know which view come from whic component and apply css only on it
  // Native use the DOM shadow not supported by all browsers
})
export class ServerElementComponent implements OnInit {
  // define property type of object without any value
  // @Input() decorator expose the property and allow parents component to access to it and edit it
  // add an alias for the property name used outside the component (srvElement)
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
