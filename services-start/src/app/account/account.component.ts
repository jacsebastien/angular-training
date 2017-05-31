import { Component, Input } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  // AccountService is already instancied in providers of AppModule so we just need to add it in constructor and not in providers of this component to get the same instance here
  constructor(private accountService: AccountService) {}

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
  }
}
