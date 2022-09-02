import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RandomFoodService {

  constructor(private http: HttpClient) {}

  listRandomFood(take: number) {
    const apiUrl = `${environment.baseUrl}random?apiKey=${environment.apiKey}&number=${take}`;

    return this.http.get(apiUrl);
  }
}
