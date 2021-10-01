import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServletsComponent } from './servlets.component';

describe('ServletsComponent', () => {
  let component: ServletsComponent;
  let fixture: ComponentFixture<ServletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
