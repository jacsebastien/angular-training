import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // create an array type of Recipe and create new Recipe inside it
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/899px-Recipe-575434.svg.png'),
    new Recipe('A Second Recipe', 'This is an other test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/899px-Recipe-575434.svg.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
