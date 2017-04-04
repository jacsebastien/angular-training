import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cokpit',
  templateUrl: './cokpit.component.html',
  styleUrls: ['./cokpit.component.css']
})
export class CokpitComponent implements OnInit {
  // properties type of EventEmitter (for event binding) and define the type of data that will be emit
  // @Output() allow properties to be listenend by parent component
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // () for calling the constructor
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // EventEmitter is an object in angular that allow us to emitour own events

  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // affect new data to the EventEmitter properties from the input value passed to the method 
      this.serverCreated.emit({
        serverName: nameInput.value,
        serverContent: this.newServerContent
      })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
      this.blueprintCreated.emit({
        serverName: nameInput.value,
        serverContent: this.newServerContent
      })
  }
}
