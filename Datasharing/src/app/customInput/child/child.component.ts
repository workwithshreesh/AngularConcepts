import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  alertMsg = input<string>();
  successMsg = input<string>();

  get alertMesgGet(){
    return this.alertMsg()
  }

  get successMsgGet(){
    return this.successMsg()
  }

 
  

}
