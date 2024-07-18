import { Component, Input } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list',
  template: `
  <app-post-card *ngFor="let post of postList" [post]="post"></app-post-card>
  `,
  styles: [
  ]
})
export class PostListComponent {
  @Input() postList!: Post[];
}
