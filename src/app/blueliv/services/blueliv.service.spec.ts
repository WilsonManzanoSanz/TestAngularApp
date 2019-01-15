import { TestBed, inject } from '@angular/core/testing';

import { BluelivService } from './blueliv.service';

describe('BluelivService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BluelivService]
    });
  });

  it('should be created', inject([BluelivService], (service: BluelivService) => {
    expect(service).toBeTruthy();
  }));
});
