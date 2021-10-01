import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringcoreComponent } from './springcore.component';

describe('SpringcoreComponent', () => {
  let component: SpringcoreComponent;
  let fixture: ComponentFixture<SpringcoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringcoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
