import { Component, OnInit } from '@angular/core';
import { UpdateUserComponent } from '../../components/update-user.component';
import { takeWhile } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { YoutubeRepositeryService } from '../../services/youtube-repositery.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [``]
})
export class UsersComponent implements OnInit{
  users: User[] = [];
  loading = false;
  error = false;
  isAlive = true;

  constructor(private youtubeRepository: YoutubeRepositeryService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.fetchData();
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  fetchData() {
    const observer$ = this.youtubeRepository.getUserList();
    const userData$ = observer$[1];
    const loading$ = observer$[0];
    const error$ = observer$[2];
    userData$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.users = data;
    });
    loading$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loading = data;
    });
    error$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.error = data;
    });
  }

  tryAgain() {
    this.youtubeRepository.getUserList(true);
  }

  addUser() {
    this.dialog.open(UpdateUserComponent, {
      width: '256px'
    });
  }
}
