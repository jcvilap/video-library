import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-video-thumb',
  templateUrl: './video-thumb.component.html',
  styleUrls: ['./video-thumb.component.css'],
})
export class VideoThumbComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() publishedAt: string;
  @Input() thumbnail: any;
  @Output() onSelect = new EventEmitter();

  handleSelect() {
    this.onSelect.emit();
  }
}
