import { Component, Input } from '@angular/core';
import { Post } from '../models/post';
import { Comment } from '../models/post';
import { YoutubeRepositeryService } from '../services/youtube-repositery.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styles: [`
  mat-card {
    width: 50%;
    margin: 20px;
  }`
  ]
})
export class PostCardComponent {

  @Input() post!: Post;
  commentDescription = '';

  constructor(private youtubeRepository: YoutubeRepositeryService) {
  }

  addComment() {
    const comment: Comment = {
      id: 124,
      description: this.commentDescription
    };
    this.youtubeRepository.addComment(comment, this.post.id);
  }

  deleteComment(id: number) {
    this.youtubeRepository.deleteComment(id, this.post.id);
  }
  update() {
    const comment: Comment = {
      id: 124,
      description: this.commentDescription
    };
    this.youtubeRepository.updateComment(comment, this.post.id);
  }

}
