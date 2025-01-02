import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CryptoCoinComponent } from "./crypto-coin/crypto-coin.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CryptoCoinComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Crypto_Project';
}
