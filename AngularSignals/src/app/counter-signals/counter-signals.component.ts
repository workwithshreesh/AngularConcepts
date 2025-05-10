import { Component, computed, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-counter-signals',
  imports: [],
  templateUrl: './counter-signals.component.html',
  styleUrl: './counter-signals.component.css'
})
export class CounterSignalsComponent implements OnInit{

  // declaration
  efect!:string;

  // Signals to hold counter state
  count = signal(0);


  // Computed signals to get double of count
  doubleCount = computed(() => this.count() * 2 );

  // Effect to log whenever count change
  logEffect = effect(()=> {
    this.efect = `Count: ${this.count()} --- CommputedCount: ${this.doubleCount()}`
  });

  increement(){
    this.count.update(oldValue => oldValue +1 );
  }

  decreement(){
    this.count.update(oldValue => oldValue - 1 );
  }

  ngOnInit(): void{

  }



}
