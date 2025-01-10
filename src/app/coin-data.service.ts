import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoinDataService {

  // private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  // private apiUrl = 'https://api.coingecko.com/api/v3/coins/bitcoin?x_cg_demo_api_key=';

  private apiUrl = 'https://api.coingecko.com/api/v3/coins/';
  private apiEnd = '?x_cg_demo_api_key='

  private apiKey = environment.apiKey;

  public apiResult : any;

  constructor(private http: HttpClient) { }

  // getPosts(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/${1}`);
  // }

  getTest(): any {
    return 'testing coin-data service';
  }

  getJsonPlaceholder(cryptoId:string): Observable<any>{

    // console.log(this.apiUrl+this.apiKey)
    return this.http.get(this.apiUrl + cryptoId + this.apiEnd + this.apiKey)
  }
}
