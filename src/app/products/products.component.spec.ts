import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ProductsComponent} from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let product = null;
  let productArray: any[];


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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain package', () => {
    console.log(product);
    product = component.getByPackagingId(2);
    console.log(product);
    expect(product).toEqual([ Object({ packageId: 2, productId: 100, quantity: 5, price: 60 }) ]);
  });

  it('should array contains packages', () => {
    productArray = component.getPackagesByProductId(100);
    console.log(productArray);
    expect(productArray).toEqual([ Object({ packageId: 1, productId: 100, quantity: 1, price: 15 }),
      Object({ packageId: 2, productId: 100, quantity: 5, price: 60 }),
      Object({ packageId: 3, productId: 100, quantity: 10, price: 100 }) ]);
  });


});
