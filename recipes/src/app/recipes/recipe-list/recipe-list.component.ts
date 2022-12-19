import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Recipe', 'This is the recipe description', 'https://www.tasteofhome.com/wp-content/uploads/2022/10/Sea-Salt-Sticks-_EXPS_RC22_269881_DR_09_30_2b.jpg'),
    new Recipe('Recipe', 'This is the recipe description', 'https://www.tasteofhome.com/wp-content/uploads/2022/10/Sea-Salt-Sticks-_EXPS_RC22_269881_DR_09_30_2b.jpg'),
  ];
}
