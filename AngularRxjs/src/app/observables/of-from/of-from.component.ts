import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignutilityService } from '../../app-services/designutility.service';

@Component({
  selector: 'app-of-from',
  imports: [],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.css'
})
export class OfFromComponent implements OnInit {

  obMsg:any;

  constructor(
    private _designUtility: DesignutilityService
  ){}

  ngOnInit(): void {
    
    // OF

    const Obs1 = of('Anup', 'Shekhar', 'Sharma');

    Obs1.subscribe({
      next: (res) => {
        console.log(res);
        this._designUtility.print(res, 'elContainer1')

      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log("Observable is completed")
      }
    });



    const Obs2 = of({a:'Anup', b:'Shekhar', c:'Sharma'});


    Obs2.subscribe({
      next: (res)=> {
        this.obMsg = res
      },
      error: (error) => {
        console.error(error)
      },
      complete: () => {
        console.log("Observable is completed")
      }
    });


    // ================================================================


    // FROM


    // From array
    const Obs3 = from(['Shreesh', 'Trends', 'UxTrends']);

    Obs3.subscribe({
      next: (res) => {
        console.log(res);
        this._designUtility.print(res, 'elContainer3')
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log("Observable is completed");
      }
    });


    // From promise
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;

        if(success){
          resolve("Promise is resolved");
        }else{
          reject("Promise is rejected")
        }
      }, 3000)
    });


    // promise
    // .then((res) => console.log(res))
    // .catch((error) => console.log(error));

    const Obs4 = from(promise);
    Obs4.subscribe({
      next: (res) => {
        console.log(res);
        this._designUtility.print(res as string, 'elContainer4')
      },
      error: (error) => {
        console.log(error);
        this._designUtility.print(error, 'elContainer4');
      },
      complete: () => {
        console.log("Observable is completed");
      }
    });

    // From String

    const Obs5 = from('Welcome to dashboard');
    Obs5.subscribe({
      next: (res) => {
        console.log('From string => ', res);
        this._designUtility.print(res, 'elContainer5')
      },
      error: (error) => {
        console.error(error)
      },
      complete: () => {
        console.log('Observable is completed')
      }
    });


  }

}
