import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(query: string) {
    const apiUrl = `${environment.baseUrl}complexSearch?apiKey=${environment.apiKey}&query=${query}&number=10`;

    return this.http.get(apiUrl);
  }

}
