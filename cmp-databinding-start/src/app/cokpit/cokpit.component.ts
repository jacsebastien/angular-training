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

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    // affect new data (from data binding between view and component) to the EventEmitter properties
      this.serverCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
      })
  }

  onAddBlueprint() {
      this.blueprintCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
      })
  }
}
