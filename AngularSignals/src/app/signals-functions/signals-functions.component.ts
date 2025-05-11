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


arrayConatiner = signal<string[]>(["Buy Milk", "Bulk Milk"])


incaseMutate() {
  this.person.update(p => ({...p, age: p.age+1}))
}


arrayMutate() {
  this.arrayConatiner.update(value => {
    const newArray = [...value];

    newArray.splice(1,1,"1 Milk Bottel");

    return newArray;
  });
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

  //  array signal before mutate
  console.log(this.arrayConatiner())
  
  //  array mutate
  this.arrayMutate()


  // array mutate console on screen
  console.log(this.arrayConatiner());

  }


  increement(){
    this.count.update(oldValue => oldValue + 1 );
  }


  decreement(){
    this.count.update(oldValue => oldValue - 1 );
  }

}
