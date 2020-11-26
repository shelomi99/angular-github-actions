import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ProductsComponent} from './products.component';
import {Product} from '../product';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let product = null;
  let productArray: any[] = [];


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test cases for getByPackagingId function
  it('getByPackagingId - Test 01', () => {
    product = component.getByPackagingId(2);
    expect(product).toEqual([ Object({ packageId: 2, productId: 100, quantity: 5, price: 60, stockQuantity: 10 }) ]);
  });

  it('getByPackagingId - Test 02', () => {
    product = component.getByPackagingId(1000);
    console.log(product);
    expect(product.length).toEqual(0);
  });

  it('getByPackagingId - Test 03', () => {
    product = component.getByPackagingId(-1);
    console.log(product);
    expect(product.length).toEqual(0);
  });

  it('getByPackagingId - Test 04', () => {
    product = component.getByPackagingId(undefined);
    console.log(product);
    expect(product.length).toEqual(0);
  });

  // test methods for getPackagesByProductId function
  it('getPackagesByProductId - Test 01', () => {
    productArray = component.getPackagesByProductId(100);
    console.log(productArray);
    expect(productArray).toEqual([ Object({ packageId: 1, productId: 100, quantity: 1, price: 15, stockQuantity: 10}),
      Object({ packageId: 2, productId: 100, quantity: 5, price: 60, stockQuantity: 10 }),
      Object({ packageId: 3, productId: 100, quantity: 10, price: 100, stockQuantity: 5 }) ]);
  });

  it('getPackagesByProductId - Test 02', () => {
    productArray = component.getPackagesByProductId(1000);
    console.log(productArray);
    expect(productArray.length).toEqual(0);
  });

  it('getPackagesByProductId - Test 03', () => {
    productArray = component.getPackagesByProductId(undefined);
    console.log(productArray);
    expect(productArray.length).toEqual(0);
  });

  it('getPackagesByProductId - Test 04', () => {
    productArray = component.getPackagesByProductId(-1);
    console.log(productArray);
    expect(productArray.length).toEqual(0);
  });

  // test methods for getCheapestPackagingCombination function

  it('getCheapestPackagingCombination - Test 01', () => {
    productArray = component.getCheapestPackagingCombination(100, 1);
    console.log('this', productArray) ;
    expect(productArray.length).toEqual(2);
  });

  it('getCheapestPackagingCombination - Test 02', () => {
    productArray = component.getCheapestPackagingCombination(100, 5);
    expect(productArray.length).toEqual(2);
  });

  it('getCheapestPackagingCombination - Test 03', () => {
    productArray = component.getCheapestPackagingCombination(100, 10);
    expect(productArray.length).toEqual(2);
  });

  it('getCheapestPackagingCombination - Test 04', () => {
    productArray = component.getCheapestPackagingCombination(100, 15);
    expect(productArray.length).toEqual(3);
  });


});
