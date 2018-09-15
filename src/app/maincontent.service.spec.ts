import { TestBed, inject } from '@angular/core/testing';

import { MaincontentService } from './maincontent.service';

describe('MaincontentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaincontentService]
    });
  });

  it('should be created', inject([MaincontentService], (service: MaincontentService) => {
    expect(service).toBeTruthy();
  }));
});
