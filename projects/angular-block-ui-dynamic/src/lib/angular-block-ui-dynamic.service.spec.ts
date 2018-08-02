import { TestBed, inject } from '@angular/core/testing';

import { AngularBlockUiDynamicService } from './angular-block-ui-dynamic.service';

describe('AngularBlockUiDynamicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularBlockUiDynamicService]
    });
  });

  it('should be created', inject([AngularBlockUiDynamicService], (service: AngularBlockUiDynamicService) => {
    expect(service).toBeTruthy();
  }));
});
