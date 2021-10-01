import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaxmlComponent } from './javaxml.component';

describe('JavaxmlComponent', () => {
  let component: JavaxmlComponent;
  let fixture: ComponentFixture<JavaxmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaxmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaxmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
