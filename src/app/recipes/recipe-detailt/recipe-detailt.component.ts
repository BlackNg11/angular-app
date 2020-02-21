import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-detailt",
  templateUrl: "./recipe-detailt.component.html",
  styleUrls: ["./recipe-detailt.component.css"]
})
export class RecipeDetailtComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() {}

  ngOnInit(): void {}
}
