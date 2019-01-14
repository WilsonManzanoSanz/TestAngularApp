import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeServerDetailsComponent } from './crime-server-details.component';

describe('CrimeServerDetailsComponent', () => {
  let component: CrimeServerDetailsComponent;
  let fixture: ComponentFixture<CrimeServerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimeServerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeServerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
