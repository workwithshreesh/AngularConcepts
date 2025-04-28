import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {

  alertMessage = "This is a message from parent";
  alertSuccess = "Message is fetched successfully";

  clickParent = ""

  ngOnInit(): void {

  }

  onClickParent(event:any){
    this.clickParent = event;
  }

}
