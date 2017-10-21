import { TestBed, inject } from '@angular/core/testing';

import { SalesData2Service } from './sales-data2.service';

describe('SalesData2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesData2Service]
    });
  });

  it('should be created', inject([SalesData2Service], (service: SalesData2Service) => {
    expect(service).toBeTruthy();
  }));
});
