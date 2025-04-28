import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges, OnInit {

  @Input() alertMessageChild!: string;
  @Input() alertSuccessChild!: string

  @Output() alertChange = new EventEmitter<string>();

  helloChild = "Hello from child";

  ngOnChanges(): void {
    console.log(this.alertMessageChild);
    console.log(this.alertSuccessChild);
  }

  ngOnInit(): void {

    
  }

  alertChanges(value:any){
    this.alertChange.emit(value)
  }

}
