import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor() { }

  print(streamData:string, containerId:string){
    let el = document.createElement('li');
    el.innerText = streamData;
    document.getElementById(containerId)?.appendChild(el);
  }

}
