import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {baseUrl, channelId, key} from '../app.constants';

@Injectable()
export class VideoLibraryService {
  constructor(public httpClient: HttpClient) {
  }

  /**
   * zTOdo remove proxy
   * @returns {Observable<Object>}
   */
  getVideos(q: string = '', {maxResults, pageToken}) {
    const params: any = {
      q, channelId, key, maxResults, pageToken,
      part: 'snippet'
    };

    // Delete page token attribute if it does not have a value
    if (!pageToken) {
      delete params.pageToken;
    }

    return this.httpClient.get(baseUrl, {params});
  }
}
