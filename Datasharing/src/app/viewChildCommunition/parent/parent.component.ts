import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent) childComponent!: ChildComponent;


  ngAfterViewInit(): void {

    console.log("After view init is called ! calling method from child");
    this.childComponent.updateMessage("Update from parent");

  }


  callUpdateMethod(): void {
    this.childComponent.updateMessage("Clicked from parent");
  }

}
