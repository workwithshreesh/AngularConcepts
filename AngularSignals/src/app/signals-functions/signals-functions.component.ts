import { Component, computed, OnInit, signal } from '@angular/core';
type Person = { name: string; age: number };

@Component({
  selector: 'app-signals-functions',
  imports: [],
  templateUrl: './signals-functions.component.html',
  styleUrl: './signals-functions.component.css'
})
export class SignalsFunctionsComponent implements OnInit {

  // signals count
  count = signal(0);

  // coumputed signals based on thetop of other signal
  doubleCount = computed(() => this.count() * 2);



person = signal<Person>({
  name: 'shreesh',
  age: 18,
});

incaseMutate() {
  this.person.update(p => ({...p, age: p.age+1}))
}

  ngOnInit(): void {
    // console on signal count
    console.log(this.count());

    // set signal value function
    this.count.set(5);

    console.log(this.count());

    // computed signal function
    console.log(this.doubleCount());

    // siganl object
    console.log(this.person())

    // signals mutate
   this.incaseMutate();

   // signal object change
   console.log(this.person())

  }


  increement(){
    this.count.update(oldValue => oldValue + 1 );
  }


  decreement(){
    this.count.update(oldValue => oldValue - 1 );
  }

}
