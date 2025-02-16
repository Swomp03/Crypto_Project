import { Component, inject, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { CoinDataService } from '../coin-data.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crypto-coin',
  imports: [CommonModule],
  templateUrl: './crypto-coin.component.html',
  styleUrl: './crypto-coin.component.css'
})
export class CryptoCoinComponent implements OnInit {

  post: any;
  jsonPlaceholder: any;
  @Input() cryptoId!: string;

  cryptoName: string | undefined;
  image: string | undefined;
  symbol: string | undefined;
  currentPrice: string | undefined;
  priceChange: string | undefined;
  marketCap: string | undefined;

  isUp: boolean | undefined = false;

  constructor(private coinDataService: CoinDataService) {
    this.post = this.coinDataService.getTest();

    // this.jsonPlaceholder = this.coinDataService.getJsonPlaceholder();
  }

  ngOnInit(): void {
    // console.log("Crypto Coin Component Initialized");
    // this.getData();
    // if (this.post) {
    //   console.log("Result:", this.post);
    // }
    this.getCryptoInfo();

    setInterval(() => {
      this.getCryptoInfo();
    }, 300000);
  }

  getCryptoInfo() {
    console.log(this.post);

    // console.log("Crypto Id:", this.cryptoId)

    this.coinDataService.getJsonPlaceholder(this.cryptoId).subscribe({
      next: (data) => {
        this.jsonPlaceholder = data;
        // console.log("JsonPlaceholder:", this.jsonPlaceholder);

        this.cryptoName = data.name;
        this.image = data.image.large;
        this.symbol = data.symbol.toUpperCase();
        this.currentPrice = data.market_data.current_price.cad;
        this.priceChange = data.market_data.price_change_percentage_7d;
        this.marketCap = data.market_data.market_cap.cad;
        console.log(this.image);

        if (this.priceChange) {
          let price_up_down = (this.priceChange + '').split("");
          // console.log("Price change up down:", price_up_down[0]);

          if (price_up_down[0] == "-") {
            this.isUp = false;
          }
          else {
            this.isUp = true;
            this.priceChange = "+" + this.priceChange;
          }
        }

      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }
}
