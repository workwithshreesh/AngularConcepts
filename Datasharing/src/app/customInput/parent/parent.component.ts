import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  alertmessageParent = "Parent is showing alert";
  alertsuccessParent = "Parent is showing success";

  set changeMessage(newMessage:any){
    this.alertsuccessParent = newMessage
  }

  alertChangeMessage(){
    this.changeMessage = "Parent is showing failure"
  }

}
