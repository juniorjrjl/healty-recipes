import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, Subscription } from 'rxjs';
import { SingleRecipeService } from 'src/app/services/single-recipe/single-recipe.service';

@Component({
  selector: 'app-main-information',
  templateUrl: './main-information.component.html',
  styleUrls: ['./main-information.component.css']
})
export class MainInformationComponent implements OnInit, OnDestroy {

  public loading: boolean = true;
  public recipeId: number = 1;
  public food: any = {};
  public takeRecipeSubscription: Subscription = new Subscription;
  public routeSubscription: Subscription = new Subscription;

  @Output() recipeIdSimilar!: number;

  constructor(
    private service: SingleRecipeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRecipeId();
    this.takeRecipe(this.recipeId);
    this.recipeIdSimilar = this.recipeId;
  }

  ngOnDestroy(): void {
    this.takeRecipeSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  getRecipeId() {
    this.routeSubscription = this.route.queryParams.subscribe((queryParams: any) => this.recipeId = queryParams['id']);
  }

  takeRecipe(id: number) {
    this.takeRecipeSubscription = this.service
      .takeRecipe(id)
      .pipe(finalize(() => this.loading = false))
      .subscribe((data: any) => this.food = data);
  }

}
