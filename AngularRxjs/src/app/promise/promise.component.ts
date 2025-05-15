import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  imports: [],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.css'
})
export class PromiseComponent implements OnInit {

  ngOnInit(): void {

    let buyLaptop = new Promise((resolve, reject)=>{
      
      // resolve("Promise is resolved")
      // reject({message:"Promise is not completed"})

      if(this.DellAvilable()){

        return setTimeout(()=> {
          resolve("Promise is completed for dell");
        },3000);

      }else if(this.HpAvilable()){

        return setTimeout(() => {
          resolve("Promise is completed for Hp")
        },3000);

      }else{
        return setTimeout(() => {
          reject("Promise is rejected")
        },3000);
      }

    });

    buyLaptop.then(res => {
      console.log(res);
      alert(res);
    }).catch(err => {
      console.log(err);
      alert(err);
    })
  }

DellAvilable(){
  return false;
}


HpAvilable(){
  return false;
}

}

