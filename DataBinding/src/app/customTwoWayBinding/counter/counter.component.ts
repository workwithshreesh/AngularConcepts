import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input() value: number = 0;

  @Output() valueChange = new EventEmitter <number> ();


  increement(){

    this.value++;
    this.valueChange.emit(this.value)

  }

  decreement(){

    this.value --;
    this.valueChange.emit(this.value);

  }

}
