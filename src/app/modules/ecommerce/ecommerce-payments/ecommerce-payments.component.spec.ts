import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercePaymentsComponent } from './ecommerce-payments.component';

describe('EcommercePaymentsComponent', () => {
  let component: EcommercePaymentsComponent;
  let fixture: ComponentFixture<EcommercePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommercePaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommercePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
