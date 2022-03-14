import { TestBed } from '@angular/core/testing';

import { StateAppService } from './state-app.service';

describe('StateAppService', () => {
  let service: StateAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
