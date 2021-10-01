import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionhandlingComponent } from './exceptionhandling.component';

describe('ExceptionhandlingComponent', () => {
  let component: ExceptionhandlingComponent;
  let fixture: ComponentFixture<ExceptionhandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExceptionhandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionhandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
