import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringintegrationComponent } from './springintegration.component';

describe('SpringintegrationComponent', () => {
  let component: SpringintegrationComponent;
  let fixture: ComponentFixture<SpringintegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringintegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
