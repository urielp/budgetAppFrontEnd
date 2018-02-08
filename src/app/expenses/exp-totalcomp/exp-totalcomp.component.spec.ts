import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpTotalcompComponent } from './exp-totalcomp.component';

describe('ExpTotalcompComponent', () => {
  let component: ExpTotalcompComponent;
  let fixture: ComponentFixture<ExpTotalcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpTotalcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpTotalcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
