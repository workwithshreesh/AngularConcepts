import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignutilityService } from '../../app-services/designutility.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom',
  imports: [CommonModule],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css'
})
export class CustomComponent implements OnInit {

  techStatus!:string;
  techStatus2!:string;
  techStatus3!:string;
  name!:string;
  subs2!:Subscription;
  subs3!:Subscription;

  constructor(
    private _designUtility: DesignutilityService
  ){}

  ngOnInit(): void {



    // Example - 01 (Manual)

    const cusObs1 = Observable.create((observer:any) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);

      setTimeout(() => {
        observer.next('Typescript');
      }, 2000);

      setTimeout(() => {
        observer.next('Html and css');
      }, 3000);
      setTimeout(() => {
        observer.next('TypeScript');
        // observer.error(new Error('Limit Exceed'))
      }, 4000);

      setTimeout(() => {
        observer.next('Python');
        observer.complete('Observable complete');
      }, 5000);

      // observer.error('');
      // observer.error('');
      // observer.complete('')
    });

    cusObs1.subscribe(
      (res:any) => {
      console.log(res);
      this._designUtility.print(res,'elContainer')
    },
    (error:any) => {
      this.techStatus = 'error'
    },
    (complete:any) => {
      this.techStatus = 'complete';
    }
  );





  // Ex - 2 Observable create
  const elements = ['Html', 'Css', 'Node', "DSA", 'Angular', 'Typescript']
  const cusObs2 = Observable.create((observer:any) => {
    let count = 0
    setInterval(() => {
      observer.next(elements[count]);
      if(count >= 4){
        // observer.complete();
        observer.error();
      }
      count++;
    },1000);
  });


  this.subs3 = cusObs2.subscribe({
    next: (res:any)=> {
      console.log(res);
      this._designUtility.print(res,'elContainer2');
    },
    error: (error:any) => {
      console.log(error);
      this.techStatus2 = 'error';
    },
    complete: ()=> {
      console.log("Observable is complete");
      this.techStatus2 = 'complete';
    }
  });




  // Ex - 03 Random Observable
  const elements2 = ['Html', 'Css', 'Node', "DSA", 'Angular', 'Typescript'];
  const cusObs3 = Observable.create((observer:any) => {

    let count = 0;

    setInterval(() => {
      observer.next(elements2[count]);

      if(count %2 == 0){
        this.techStatus3 = 'error';
      }else{
        this.techStatus3 = 'complete';
      }

      if(count >= 5){
        this.techStatus3 = 'complete';
        observer.complete();
      }
  
      count++;
    }, 1000);

 

  });

  cusObs3.subscribe(
    (res:any) => {
      this.name = res;
    },
    (error:any) => {
      console.error(error);
      this.techStatus3 = 'error';
    },
    () => {
      console.log("Observable is completed");
      this.techStatus3 = 'complete';
    }
    );
    
  }


  ngOnDestroy() :void {
    this.subs2.unsubscribe();
    this.subs3.unsubscribe();
  }

}
