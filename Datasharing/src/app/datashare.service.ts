import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  dataSubject = new BehaviorSubject<any>(0) || null;
  dataOfArray$ = this.dataSubject.asObservable();

  constructor() { }


  dataTransfer(newData:any){
    this.dataSubject.next(newData);
  }


}
