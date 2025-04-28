import { Component, OnInit } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit  {

  constructor(
    private parent: ParentComponent
  ){}

  ngOnInit(){

    this.parent.dataFunc()

    console.log(this.parent.parentProperty); 

  }

}
