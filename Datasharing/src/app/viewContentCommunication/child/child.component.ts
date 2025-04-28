import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements AfterContentInit {

  @ContentChild('contentProjected', { static: false }) contentProjected!: ElementRef

  ngAfterContentInit(): void {
    if(this.contentProjected){
      console.log(this.contentProjected.nativeElement.innerHTML);

    }
  }

}
