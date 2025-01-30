/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthTokenService } from './authToken.service';

describe('Service: AuthToken', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthTokenService]
    });
  });

  it('should ...', inject([AuthTokenService], (service: AuthTokenService) => {
    expect(service).toBeTruthy();
  }));
});
