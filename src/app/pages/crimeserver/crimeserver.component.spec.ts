import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeserverComponent } from './crimeserver.component';

describe('CrimeserverComponent', () => {
  let component: CrimeserverComponent;
  let fixture: ComponentFixture<CrimeserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimeserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
