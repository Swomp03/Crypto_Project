import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  currentTime: string = new Date().toString().substring(0, 25);
  test: string = 'testing';

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date().toString().substring(0, 25);
      // console.log(this.currentTime);
    }, 1000);
  }

}
