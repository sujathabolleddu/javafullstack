import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringtestingComponent } from './springtesting.component';

describe('SpringtestingComponent', () => {
  let component: SpringtestingComponent;
  let fixture: ComponentFixture<SpringtestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringtestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringtestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
