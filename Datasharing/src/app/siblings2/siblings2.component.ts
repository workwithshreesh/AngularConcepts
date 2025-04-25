import { Component } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-siblings2',
  imports: [CommonModule],
  templateUrl: './siblings2.component.html',
  styleUrl: './siblings2.component.css'
})
export class Siblings2Component {
  data:any;
  
  constructor(
    private dataShare:DatashareService
  ){}

  ngOnInit(){
    this.dataShare.dataOfArray$.subscribe(dat=> {
      this.data = dat;
    })
  }
}
