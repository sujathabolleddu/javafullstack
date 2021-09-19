import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaioComponent } from './javaio.component';

describe('JavaioComponent', () => {
  let component: JavaioComponent;
  let fixture: ComponentFixture<JavaioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
