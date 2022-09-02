import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SingleRecipeService {

  constructor(private http: HttpClient) { }

  takeRecipe(id: Number){
    const apiUrl = `${environment.baseUrl}${id}/information?apiKey=${environment.apiKey}`
    return this.http.get(apiUrl);
  }

  takeSimilarRecipe(id: number) {
    const apiUrl = `${environment.baseUrl}${id}/similar?apiKey=${environment.apiKey}`;
  
    return this.http.get(apiUrl);
  }

}
