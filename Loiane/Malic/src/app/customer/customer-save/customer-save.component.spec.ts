import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSaveComponent } from './customer-save.component';

describe('CustomerSaveComponent', () => {
  let component: CustomerSaveComponent;
  let fixture: ComponentFixture<CustomerSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
