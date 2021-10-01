import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringdataComponent } from './springdata.component';

describe('SpringdataComponent', () => {
  let component: SpringdataComponent;
  let fixture: ComponentFixture<SpringdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
