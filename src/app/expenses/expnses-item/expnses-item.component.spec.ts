import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpnsesItemComponent } from './expnses-item.component';

describe('ExpnsesItemComponent', () => {
  let component: ExpnsesItemComponent;
  let fixture: ComponentFixture<ExpnsesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpnsesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpnsesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
