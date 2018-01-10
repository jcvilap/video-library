import {inject, TestBed} from '@angular/core/testing';

import {VideoLibraryService} from './video-library.service';

describe('VideoLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoLibraryService]
    });
  });

  it('should be created', inject([VideoLibraryService], (service: VideoLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
