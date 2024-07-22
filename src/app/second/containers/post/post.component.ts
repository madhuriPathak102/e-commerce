import { Component } from '@angular/core';
import { YoutubeRepositeryService } from '../../services/youtube-repositery.service';
import { Post } from '../../models/post';
import { takeWhile } from 'rxjs';

@Component({
  selector: 'app-post',
  template: `
  <app-post-list [postList]="postList"></app-post-list>
  `,
  styles: [
  ]
})
export class PostComponent {
  postList!: Post[];
  isAlive = true;
  loading = false;
  error = false;

  constructor(private youtubeRepository: YoutubeRepositeryService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const observer$ = this.youtubeRepository.getAllPost();
    const postData$ = observer$[1];
    const loading$ = observer$[0];
    const error$ = observer$[2];
    postData$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.postList = data;
    });
    loading$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loading = data;
    });
    error$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.error = data;
    });
  }
}
