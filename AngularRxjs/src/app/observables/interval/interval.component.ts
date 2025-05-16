import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignutilityService } from '../../app-services/designutility.service';

@Component({
  selector: 'app-interval',
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.css'
})
export class IntervalComponent implements OnInit, OnDestroy {

  obsMsg: any;
  timeMsg:any;
  videoSubscription!: Subscription;
  videoSubscriptionTimer!:Subscription;

  constructor(
    private _utilityDesign: DesignutilityService
  ) { }

  ngOnInit(): void {

    const broadCastVideosInterval = interval(2000);

    this.videoSubscription = broadCastVideosInterval.subscribe({
      next: (res) => {
        console.log(res);
        this.obsMsg = 'Videos ' + res
        this._utilityDesign.print(this.obsMsg, 'elContainer1');
        // this._utilityDesign.print(this.obsMsg, 'elContainer2');
        if (res >= 5) {
          this.videoSubscription.unsubscribe();
        }
      },
      error: (error) => {
        console.error(error); 
      },
      complete: () => {
        console.log("Subscriber is completed there work");
      }
    });

    
    // it will take first argument as delay and second as timer
    const broadCastVideosTimer = timer(5000, 1000);

    this.videoSubscriptionTimer = broadCastVideosTimer.subscribe({
      next: (res) => {
        this.timeMsg = `Video `+ res;
        this._utilityDesign.print(this.timeMsg, 'elContainer2');

        if(res >= 5){
          this.videoSubscriptionTimer.unsubscribe();
        }
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log("observable is completed")
      }
    });
    

  }


  ngOnDestroy(): void {
    this.videoSubscription.unsubscribe();
    this.videoSubscriptionTimer.unsubscribe();
  }

}













// import { Subject } from 'rxjs';

// const broadCastVideos = new Subject<number>();

// this.videoSubscription = broadCastVideos.subscribe({
//   next: (res) => {
//     console.log(res);
//     this.obsMsg = 'Videos ' + res;

//     if (res >= 5) {
//       broadCastVideos.complete(); // Explicitly completes the observable
//     }
//   },
//   error: (error) => {
//     console.error(error);
//   },
//   complete: () => {
//     console.log("Subscriber has completed their work");
//   }
// });

// // Simulating values being emitted
// let count = 1;
// const interval = setInterval(() => {
//   if (count > 5) {
//     clearInterval(interval); // Stop emitting values after 5
//   } else {
//     broadCastVideos.next(count++);
//   }
// }, 1000);
