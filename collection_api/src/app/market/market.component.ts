import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: []
})
export class MarketComponent implements OnInit {
  collectables = [
    {
      description: 'Build your city',
      type: 'Management'
    },
    {
      description: 'Customize your car and win races',
      type: 'Race'
    },
    {
      description: 'Create your character, do some quests and earn xp and gold',
      type: 'MMORPG'
    }
  ];

  onAddToCollection() {
    alert('Yo !');
  }

  constructor() { }

  ngOnInit() {
  }

}
