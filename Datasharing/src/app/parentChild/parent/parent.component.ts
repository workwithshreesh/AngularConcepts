import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  dataArray = [
    { name: 'John Doe', age: 25, city: 'New York' },
    { name: 'Jane Smith', age: 30, city: 'London' },
    { name: 'Carlos Diaz', age: 28, city: 'Madrid' },
    { name: 'Emma Brown', age: 22, city: 'Paris' }
  ];

  buttonClicked(event:any){
    console.log(event)
  }


}
