import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-observables',
  imports: [RouterModule],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent implements OnInit, OnDestroy {

  source1Subscriber!:Subscription;
  source2Subscriber!:Subscription;
  source3Subscriber!:Subscription;
  source$Subscriber!:Subscription

  constructor(){}

  users = [
    {name: 'Anup', skill: 'Marketing'},
    {name:'shreesh', skill:'developer'},
    {name:'anurag', skill:'developer'},
    {name:'ratnesh',skill:'owner'}
  ];
  sourceSub!: Subscription;

  ngOnInit(): void {


    // Ex- 01
    const source = interval(6);

    this.sourceSub = source.pipe(
      take(6),
      toArray()
    )
    .subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("These observable is completed");
      }
    });



    // Ex - 02
    const source2 = from(this.users);

    source2.pipe(
      toArray()
    )
    .subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("Observable is completed")
      }
    });


    // Ex- 03

    const source3 = of('Anup', 'shekhar', 'sharma', 'uztrendz');

    source3.pipe(
      toArray()
    ).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log("Observable completed")
      }
    });

  }


  ngOnDestroy(): void {
    this.source$Subscriber.unsubscribe();
    this.source1Subscriber.unsubscribe();
    this.source2Subscriber.unsubscribe();
    this.source3Subscriber.unsubscribe();
  }

}
