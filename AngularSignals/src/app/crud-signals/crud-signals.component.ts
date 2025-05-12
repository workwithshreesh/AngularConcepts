import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-crud-signals',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crud-signals.component.html',
  styleUrl: './crud-signals.component.css'
})
export class CrudSignalsComponent implements OnInit, AfterViewInit {

  // template refrences
  @ViewChild('addNewProduct') addnewProduct!: ElementRef;
  private modalInstance!: Modal;

  // forms variable
  Product!: FormGroup

  // flags
  Edit:boolean = false;
  private currentEditName: string | null = null;


  product = signal([{ name: "Product 1", price: 100 }, { name: "Product 2", price: 99 }]);

  // dependencie injection
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    // forms controller
    this.formControllers();

  }

  ngAfterViewInit(): void {
    this.modalInstance = new Modal(this.addnewProduct.nativeElement);
  }

  openModal(context: 'Add' | { edit: 'Edit'; data: any }) {
    if (context === 'Add') {
      this.Edit = false;
      this.Product.reset();
      this.modalInstance.show();
    } else if (context.edit === 'Edit') {
      this.Edit = true;
      this.currentEditName = context.data.name;
      this.Product.patchValue({
        productName: context.data.name,
        productPrice: context.data.price,
      });
      this.modalInstance.show();
    }
  }


  closeModal() {
    this.modalInstance.hide()
  }


  formControllers() {
    this.Product = this.fb.group({
      productName: ['', Validators.required],
      productPrice: ['', Validators.required]
    })
  }


  addProduct() {
    const { productName, productPrice } = this.Product.value;
    this.product.update(oldProduct => [
      ...oldProduct,
      { name: productName, price: +productPrice }
    ]);
    this.modalInstance.hide();
  }


  saveEditedProduct() {
    if (this.Product.invalid || !this.currentEditName) return;

    const { productName, productPrice } = this.Product.value;

    this.product.update((prev) =>
      prev.map((p) =>
        p.name === this.currentEditName
          ? { name: productName, price: +productPrice }
          : p
      )
    );

    this.Product.reset();
    this.Edit = false;
    this.currentEditName = null;
    this.modalInstance.hide();
  }



  deleteProduct(productName: string) {
    this.product.update((prev) =>
      prev.filter((p) => p.name !== productName)
    );
  }


}
