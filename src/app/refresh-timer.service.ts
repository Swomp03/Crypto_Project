import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable, Subscription } from 'rxjs';
import { environment } from '../environments/environment';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshTimerService {
  public currentTime: number = 0;
  private timerSubscription? : Subscription;
  private readonly maxTime = 30;

  constructor() { }

  ngOnInit(): void{
    this.startTimer();
  }

  ngOnDestroy(): void{
    this.timerSubscription?.unsubscribe();
  }

  private startTimer(){
    this.timerSubscription = interval(1000).subscribe(() =>{
      console.log("Current time:", this.currentTime);
      this.currentTime++;
      if(this.currentTime >= this.maxTime){
        this.resetTimer();
      }
    });
  }

  resetTimer(): void{
    this.currentTime = 0
  }

  formatTime(): string {
    const minutes = Math.floor(this.currentTime / 60);
    const seconds = this.currentTime % 60;
    return `${this.pad(minutes)}m:${this.pad(seconds)}s`;
  }

  private pad(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
}
