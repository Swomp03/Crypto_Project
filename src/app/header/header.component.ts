import { Component, OnInit } from '@angular/core';
import { RefreshTimerService } from '../refresh-timer.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private refreshTimer: RefreshTimerService){
    refreshTimer.ngOnInit();
  }

  currentTime: string = new Date().toString().substring(0, 25);
  test: string = 'testing';
  lastUpdatedTime : any = '00m:00s';

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date().toString().substring(0, 25);
      this.lastUpdatedTime = this.refreshTimer.formatTime();
      console.log("Updated Time:", this.lastUpdatedTime);
      // console.log(this.currentTime);
    }, 1000);
  }

}
