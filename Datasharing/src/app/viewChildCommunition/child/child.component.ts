import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {

  message = "Hello from child";

  ngOnInit(): void{

  }

  updateMessage(newMessage: any){
    this.message = newMessage;
    console.log(this.message);
  }

}
