import {Component, OnInit} from '@angular/core';
import {VideoLibraryService} from '../../services/video-library.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-video-library',
  templateUrl: './video-library.component.html',
  styleUrls: ['./video-library.component.css']
})
export class VideoLibraryComponent implements OnInit {
  public form: FormGroup;
  public q: string;
  public videos: any[];
  public pageNumber: number;
  public pageInfo: any = {
    totalResults: 0,
    maxResults: 10,
    pageToken: '',
    nextPageToken: '',
    prevPageToken: ''
  };

  constructor(private videoLibraryService: VideoLibraryService, private router: Router) {
    this.pageNumber = 0;
    this.form = new FormGroup({
      search: new FormControl('')
    });

    this.handleNewData = this.handleNewData.bind(this);
  }

  ngOnInit() {
    this.getData();
    this.form.valueChanges.debounceTime(500)
      .subscribe(({search = ''}) => this.getData(search));
  }

  getData(search: string = '') {
    if (this.q !== search) {
      this.q = search;
    }
    this.videoLibraryService.getVideos(this.q, this.pageInfo)
      .subscribe(this.handleNewData);
  }

  handleNewData({items, pageInfo, nextPageToken, prevPageToken}) {
    this.videos = items;
    this.pageInfo.totalResults = pageInfo.totalResults;
    this.pageInfo.maxResults = pageInfo.resultsPerPage;
    this.pageInfo.pageToken = '';
    this.pageInfo.nextPageToken = nextPageToken;
    this.pageInfo.prevPageToken = prevPageToken;
  }

  handleThumbSelection(id) {
    this.router.navigateByUrl('/videos/' + id);
  }

  handlePaginatorChange({pageIndex, pageSize}) {
    this.pageInfo.maxResults = pageSize;
    if (this.pageNumber > pageIndex) {
      this.pageInfo.pageToken = this.pageInfo.prevPageToken;
    } else if (this.pageNumber < pageIndex) {
      this.pageInfo.pageToken = this.pageInfo.nextPageToken;
    }
    this.pageNumber = pageIndex;
    this.getData(this.q);
  }
}
