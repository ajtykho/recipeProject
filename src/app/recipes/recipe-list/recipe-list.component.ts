import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.dkoding.in/wp-content/uploads/Gilmore-Girls-A-Year-In-The-Life-Trending-Today-DKODING-2.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.dkoding.in/wp-content/uploads/Gilmore-Girls-A-Year-In-The-Life-Trending-Today-DKODING-2.jpg')
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
