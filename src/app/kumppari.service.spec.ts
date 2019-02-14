import { TestBed, inject } from '@angular/core/testing';

import { KumppariService } from './kumppari.service';

describe('KumppariService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KumppariService]
    });
  });

  it('should be created', inject([KumppariService], (service: KumppariService) => {
    expect(service).toBeTruthy();
  }));
});
