import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringaopComponent } from './springaop.component';

describe('SpringaopComponent', () => {
  let component: SpringaopComponent;
  let fixture: ComponentFixture<SpringaopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringaopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringaopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
