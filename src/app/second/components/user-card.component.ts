import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import { YoutubeRepositeryService } from '../services/youtube-repositery.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UpdateUserComponent } from './update-user.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styles: [
  ]
})
export class UserCardComponent {
  @Input() user!: User;

  constructor(private youtubeRepo: YoutubeRepositeryService,
              private dialog: MatDialog, private router: Router) {
  }

  delete() {
    this.youtubeRepo.deleteUser(this.user.id);
  }

  update() {
    this.dialog.open(UpdateUserComponent, {
      width: '256px', data: this.user
    });
  }

  open() {
    this.router.navigate(['user', this.user.id]);
  }
}
