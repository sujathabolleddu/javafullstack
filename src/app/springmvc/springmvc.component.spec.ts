import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringmvcComponent } from './springmvc.component';

describe('SpringmvcComponent', () => {
  let component: SpringmvcComponent;
  let fixture: ComponentFixture<SpringmvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringmvcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringmvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
