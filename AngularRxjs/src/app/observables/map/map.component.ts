import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignutilityService } from '../../app-services/designutility.service';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {

  sub1!:Subscription;
  sub2!:Subscription;
  sub3!:Subscription;

  msg1:any;
  msg2:any;
  msg3:any;

  constructor(
    private _designUtility: DesignutilityService
  ){}

  ngOnInit(): void {

    // Ex - 01

    const broadCastVideos = interval(1000);

    this.sub1 = broadCastVideos.pipe(
      map(data => `Video ${data}`)
    ).subscribe(
      (res:any) => {
        console.log("mapData =>",res);
        this.msg1 = res;
      },
      (error:any) => {
        console.log(error)
      },
      () => {
        console.log("Observable nis complete")
      }
    );

    setTimeout(() => {
      this.sub1.unsubscribe()
    }, 10000);


    // Ex - 02

    const broadCastVideos2 = interval(1000);

    this.sub2 = broadCastVideos2.pipe(
      map(data => data*3)
    )
    .subscribe(
      (res:any) => {
        console.log(res);
        this.msg2 = res;
      },
      (error:any) => {
        console.log(error);
      },
      () => {
        console.log("Observable is completed");
      }
    );

    setTimeout(()=>{
      this.sub2.unsubscribe();
    },10000);



    // Ex - 03

    const member = [
      {id: 1, name: 'Shreesh'},
      {id: 2, name: 'Anurag'},
      {id: 3, name: 'Ratnesh'},
      {id: 4, name: 'Kalpesh'},
      {id: 5, name: 'Aman'}
    ];

    let membsObs = from(member);

    membsObs.pipe(
      map(data => data.name)
    ).subscribe(
      (res:any) => {
        this._designUtility.print(res,'elContainer')
      }
    )

    
  }

}
