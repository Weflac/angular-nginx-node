/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlbumlistService } from './albumlist.service';

describe('AlbumlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumlistService]
    });
  });

  it('should ...', inject([AlbumlistService], (service: AlbumlistService) => {
    expect(service).toBeTruthy();
  }));
});
