export class Product {
  packageId: number;
  quantity: number;
  price: number;
  constructor(packageId: number, quantity: number, price: number ) {
    this.packageId = packageId;
    this.quantity = quantity;
    this.price = price;
  }

}
