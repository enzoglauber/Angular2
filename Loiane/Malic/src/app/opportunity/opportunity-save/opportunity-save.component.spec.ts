import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitySaveComponent } from './opportunity-save.component';

describe('OpportunitySaveComponent', () => {
  let component: OpportunitySaveComponent;
  let fixture: ComponentFixture<OpportunitySaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunitySaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitySaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
