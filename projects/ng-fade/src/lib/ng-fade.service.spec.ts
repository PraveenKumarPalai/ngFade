import { TestBed } from '@angular/core/testing';

import { NgFadeService } from './ng-fade.service';

describe('NgFadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFadeService = TestBed.get(NgFadeService);
    expect(service).toBeTruthy();
  });
});
