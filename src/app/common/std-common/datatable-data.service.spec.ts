import { TestBed } from '@angular/core/testing';

import { DatatableDataService } from './datatable-data.service';

describe('DatatableDataService', () => {
  let service: DatatableDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatableDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
