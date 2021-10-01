import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringjpaComponent } from './springjpa.component';

describe('SpringjpaComponent', () => {
  let component: SpringjpaComponent;
  let fixture: ComponentFixture<SpringjpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringjpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringjpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
