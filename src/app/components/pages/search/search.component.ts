import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  public loading = false;
  public query = '';
  public foods: any = [];
  public subscription: Subscription = new Subscription;

  constructor(private service: SearchService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getSearch(): any {
    this.loading = true;
    this.subscription = this.service
      .search(this.query)
      .pipe(finalize(() => this.loading = false))
      .subscribe((data: any) => this.foods = data.results);
  }

}
