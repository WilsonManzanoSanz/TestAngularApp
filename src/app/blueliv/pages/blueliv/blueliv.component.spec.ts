import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluelivComponent } from './blueliv.component';

describe('BluelivComponent', () => {
  let component: BluelivComponent;
  let fixture: ComponentFixture<BluelivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluelivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluelivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
