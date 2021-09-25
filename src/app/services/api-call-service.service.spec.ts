import { TestBed } from '@angular/core/testing';

import { AuthorService } from './api-call-service.service';

describe('ApiCallServiceService', () => {
  let service: AuthorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
