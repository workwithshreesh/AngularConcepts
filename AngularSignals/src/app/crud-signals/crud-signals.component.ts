import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-crud-signals',
  imports: [],
  templateUrl: './crud-signals.component.html',
  styleUrl: './crud-signals.component.css'
})
export class CrudSignalsComponent implements OnInit {

  product = signal([{ name:"Product 1", price:100 }, {  name:"Product 2", price:99 }]);

  ngOnInit(): void {
      
  }

  addProduct(newProduct: {name:string, price:number}){
    this.product.update((oldProduct)=> [...oldProduct, newProduct])
  }

  updateProduct(productName:any){
    
  }

  deleteProduct(productName:any){
    this.product.update((oldProduct) => oldProduct.filter(old => old.name !== productName));
  }

}
