import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceShopcartComponent } from './ecommerce-shopcart.component';

describe('EcommerceShopcartComponent', () => {
  let component: EcommerceShopcartComponent;
  let fixture: ComponentFixture<EcommerceShopcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceShopcartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceShopcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
