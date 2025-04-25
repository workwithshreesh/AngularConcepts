import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-siblings',
  imports: [],
  templateUrl: './siblings.component.html',
  styleUrl: './siblings.component.css'
})
export class SiblingsComponent implements OnInit {

  data = 3;

  constructor(
    private dataShare: DatashareService,
    private router: Router
  ){}

  ngOnInit(): void {

  }

  onSubnmit(){
    this.dataShare.dataTransfer(this.data);
    this.router.navigateByUrl("sibling")
  }

}
