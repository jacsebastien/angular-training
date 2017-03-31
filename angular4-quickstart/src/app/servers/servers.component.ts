import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = 'Example Server';

  constructor() { 
    // change the value of allowNewServer after 2s
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  // methot that will be triggered on DOM event (like mouse click)
  onCreateServer() {
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    // We need to tell to typescript that we need the value type of HTMLInputElement from the event target
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
