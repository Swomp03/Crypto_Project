import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { CoinDataService } from '../coin-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crypto-coin',
  imports: [],
  templateUrl: './crypto-coin.component.html',
  styleUrl: './crypto-coin.component.css'
})
export class CryptoCoinComponent implements OnInit {

  post: any;
  coinDataService: CoinDataService = inject(CoinDataService);

  constructor() {
    this.post = this.coinDataService.getTest();
  }

  ngOnInit(): void {
    console.log("Crypto Coin Component Initialized");
    // this.getData();
    // if (this.post) {
    //   console.log("Result:", this.post);
    // }
    console.log(this.post);
  }

  // getData(): void {
  //   this.coinDataService.getPosts().subscribe({
  //     next: (data) => (this.post = data),
  //     error: (err) => console.error('Error fetching posts:', err),
  //   });
  // }
}
