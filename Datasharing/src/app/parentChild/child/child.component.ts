import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {

  @Input() dataArray:any;
  @Output() onButtonClick = new EventEmitter<any>();


  ngOnInit(){

  }

  onIconClickCompany(buttonname:any,objdata:any) { 
    this.onButtonClick.emit({buttonname,objdata}); 
  } 

  objectKeys(data: any){
    return Object.keys(data);
  }

}
