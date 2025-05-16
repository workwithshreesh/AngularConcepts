import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { DesignutilityService } from '../../app-services/designutility.service';

@Component({
  selector: 'app-from-event',
  imports: [],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.css'
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn') addBtn!:ElementRef;

  constructor(
    private _designUtility: DesignutilityService
  ){};

  ngOnInit(): void {

    
    
  }


  ngAfterViewInit(): void {

    let count = 1

    fromEvent(this.addBtn.nativeElement, "click").subscribe({
      next: (res) => {
        let streamData = `Video ${count++}`;
        this._designUtility.print(streamData, 'elContainer1');
        this._designUtility.print(streamData, 'elContainer2');

      },
      error: (error) => {
        console.error(error)
      },
      complete: () =>{
        console.log("Completed the observable logic")
      }
    });
    
  }



}
