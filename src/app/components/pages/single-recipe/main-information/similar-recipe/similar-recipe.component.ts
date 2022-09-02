import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { SingleRecipeService } from 'src/app/services/single-recipe/single-recipe.service';

@Component({
  selector: 'app-similar-recipe',
  templateUrl: './similar-recipe.component.html',
  styleUrls: ['./similar-recipe.component.css']
})
export class SimilarRecipeComponent implements OnInit, OnDestroy {

  public similarRecipes: any = [];
  public loading = true;
  public subscription: Subscription = new Subscription;

  @Input() recipeIdSimilar!: number;

  constructor(private service: SingleRecipeService) { }

  ngOnInit(): void {
    this.takeSimilarRecipes(this.recipeIdSimilar);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  takeSimilarRecipes(id: number) {
    this.subscription = this.service
      .takeSimilarRecipe(id)
      .pipe(finalize(() => this.loading = false))
      .subscribe((data: any) => this.similarRecipes = data.slice(0, 3));
  }

  reloadPage() {
    setTimeout(() => window.location.reload(), 1);
  }

}
