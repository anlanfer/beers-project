import { TestBed } from '@angular/core/testing';

import { PunkService } from './punk.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PunkService', () => {
  let service: PunkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PunkService]
    });
    service = TestBed.inject(PunkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
