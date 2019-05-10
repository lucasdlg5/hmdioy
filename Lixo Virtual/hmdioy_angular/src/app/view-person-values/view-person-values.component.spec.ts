import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPersonValuesComponent } from './view-person-values.component';

describe('ViewPersonValuesComponent', () => {
  let component: ViewPersonValuesComponent;
  let fixture: ComponentFixture<ViewPersonValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPersonValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPersonValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
