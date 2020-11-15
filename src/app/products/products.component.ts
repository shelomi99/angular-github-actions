import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  packageItems: { packageId: number, productId: number, quantity: number, price: number }[] = [
    { packageId: 1, productId: 100, quantity: 1, price: 15 },
    { packageId: 2, productId: 100, quantity: 5, price:  60 },
    { packageId: 3,  productId: 100, quantity: 10, price:  100},
    { packageId: 4, productId: 200, quantity: 1, price: 15 },
    { packageId: 5, productId: 200, quantity: 5, price:  60 },
    { packageId: 6, productId: 200, quantity: 10, price:  100}
  ];

  countOne: number;
  countTwo: number;
  countThree: number;
  total: number;
  filteredProducts: any;
  package: any;

  filteredPackages: any[];
  constructor() { }

  getByPackagingId(packageId: number): any{
    this.package = this.packageItems.filter(value => value.packageId === packageId);
    console.log(this.package);
    return this.package;
  }

  getPackagesByProductId(productId: number): any{
    this.filteredProducts = this.packageItems.filter(value => value.productId === productId);
    console.log(this.filteredProducts);
    return this.filteredProducts;
  }

  // getCheapestPackagingCombination(productId: number, quantity: number): void {
  //
  //   this.packageItems.filter(value => {
  //
  //     this.countOne = Math.floor(quantity / 10);
  //     if (quantity % 10 < 6) {
  //       this.total = quantity % 10;
  //       this.countTwo = Math.floor((this.total) / (5));
  //     }
  //     if (this.total % 5 < 2) {
  //       this.countThree = 1;
  //     }
  //
  //   });
  // }

  ngOnInit(): void {
    this.getByPackagingId(2);
    this.getPackagesByProductId(200);
  }

}
