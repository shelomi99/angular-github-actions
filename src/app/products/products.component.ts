import { Component, OnInit } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  packageItems: { packageId: number, productId: number, quantity: number, price: number, stockQuantity: number }[] = [
    { packageId: 1, productId: 100, quantity: 1, price: 15, stockQuantity: 10 },
    { packageId: 2, productId: 100, quantity: 5, price:  60, stockQuantity: 10 },
    { packageId: 3,  productId: 100, quantity: 10, price:  100, stockQuantity: 5},
    { packageId: 4, productId: 200, quantity: 1, price: 15, stockQuantity: 10 },
    { packageId: 5, productId: 200, quantity: 5, price:  60, stockQuantity: 10 },
    { packageId: 6, productId: 200, quantity: 10, price:  100, stockQuantity: 10}
  ];

  total: number;
  filteredProducts: any;
  package: any;
  length: number;
  filteredPackage: any;
  numberOfPackagesToBuy: number;
  filteredPackages: any[];
  packageList: Product[] = [];
  productDetails: any;
  report: any;
  price: any;
  remainder: any;
  noPacksCanBuy: any;
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


  getCheapestPackagingCombination(productId: number, quantity: number): any {
    this.filteredProducts = this.getPackagesByProductId(productId);
    this.report =  this.recursion(this.filteredProducts, quantity, 0 );
    console.log('Final report', this.report);
    return this.report;
  }

  recursion(filteredPackages: any, quantity: number, totalPrice: number ): Product[] {
    this.filteredPackages = filteredPackages.filter(item => item.quantity <= quantity );

    this.length = this.filteredPackages.length - 1;

    this.filteredPackage = this.filteredPackages[this.length];
    this.numberOfPackagesToBuy = Math.floor(quantity / this.filteredPackage.quantity);
    this.remainder = quantity % this.filteredPackage.quantity;
    this.price = this.numberOfPackagesToBuy * this.filteredPackage.price ;
    // if (this.filteredPackage.stockQuantity < this.filteredPackage.quantity){
    //   this.filteredPackages = this.filteredPackages.filter(item => item.packageId !== this.filteredPackage.packageId);
    //
    //   this.noPacksCanBuy = this.filteredPackage.stockUnit;
    //   this.remainder = quantity - this.noPacksCanBuy;
    //   this.price = this.numberOfPackagesToBuy * this.filteredPackage.price ;
    // }
    // else {
    //   this.remainder = quantity % this.filteredPackage.quantity;
    //   this.price = this.numberOfPackagesToBuy * this.filteredPackage.price ;
    // }
    this.productDetails = new Product(this.filteredPackage.packageId, this.numberOfPackagesToBuy, this.price);
    if (this.remainder > 0) {
      this.recursion(this.filteredPackages, this.remainder, this.price );
    }
    this.packageList.push(this.productDetails);
    return this.packageList;
  }

  ngOnInit(): void {
    // this.getByPackagingId(2);
    // this.getPackagesByProductId(200);
    this.getCheapestPackagingCombination(100, 15);
  }

}
