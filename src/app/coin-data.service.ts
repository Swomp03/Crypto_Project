import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoinDataService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // getPosts(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/${1}`);
  // }

  getTest(): any {
    return 'testing coin-data service';
  }

  getJsonPlaceholder(): Observable<any>{
    // console.log("Process.env stuff:", environment.apiKey)
    return this.http.get(this.apiUrl)
  }
}
