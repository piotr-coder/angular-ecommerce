import { TestBed } from '@angular/core/testing';

import { DateShopFormService } from './date-shop-form.service';

describe('DateShopFormService', () => {
  let service: DateShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
