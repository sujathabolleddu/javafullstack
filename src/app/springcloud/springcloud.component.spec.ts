import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringcloudComponent } from './springcloud.component';

describe('SpringcloudComponent', () => {
  let component: SpringcloudComponent;
  let fixture: ComponentFixture<SpringcloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringcloudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
