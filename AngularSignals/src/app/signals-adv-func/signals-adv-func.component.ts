import { Component, OnInit, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signals-adv-func',
  imports: [],
  templateUrl: './signals-adv-func.component.html',
  styleUrl: './signals-adv-func.component.css'
})
export class SignalsAdvFuncComponent  {

  count = signal(0);

  private sub: Subscription;

  constructor() {




    const count$ = toObservable(this.count);
    this.sub = count$.subscribe(value => {
      console.log('Count changed (Observable):', value);
    });
    
  }
    
  

  increement(){
    this.count.update(old => old + 1 );
  }

  decreement(){
    this.count.update(old => old - 1 );
  }


  

}


