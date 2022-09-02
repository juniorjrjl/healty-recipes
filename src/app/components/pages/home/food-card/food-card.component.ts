import { Component, OnDestroy, OnInit } from '@angular/core';
import { RandomFoodService } from 'src/app/services/random-food/random-food.service';

import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent implements OnInit, OnDestroy {

  public foods: any = [];
  public loading: boolean = true;
  public loadingMore: boolean = false;
  public subscription: Subscription = new Subscription;


  constructor(private service: RandomFoodService) { }

  ngOnInit(): void {
    this.getFoods();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getFoods() {
    this.getRandomFoods(6, () => this.loading = false);
  }

  loadMore() {
    this.loadingMore = true;
    this.getRandomFoods(3, () => this.loadingMore = false);
  }

  private getRandomFoods(take: number, onFinalize: () => void){
    this.subscription = this.service
      .listRandomFood(take)
      .pipe(finalize(onFinalize))
      .subscribe((data: any) => this.foods = this.foods.concat(data.recipes));
  }

}
