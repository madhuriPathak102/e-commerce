import { Component } from '@angular/core';
import { filter, map, switchMap, takeWhile } from 'rxjs';
import { User } from '../models/user';
import { ActivatedRoute } from '@angular/router';
import { YoutubeRepositeryService } from '../services/youtube-repositery.service';

@Component({
  selector: 'app-view-user',
  template: `
  <h1>{{this.user ? this.user.email : ''}}</h1>
  <h1>{{this.user ? this.user.name : ''}}</h1>
  `,
  styles: [
  ]
})
export class ViewUserComponent {
  isAlive = true;
  user!: User;

  constructor(private route: ActivatedRoute, private youtubeRepo: YoutubeRepositeryService) {
    this.fetchData();
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  fetchData() {
    const user$ = this.route.params.pipe(map(data => data['id']),
      takeWhile(() => this.isAlive),
      switchMap((id) => {
        return this.youtubeRepo.getUserById(id);
      }), filter(res => !!res));
    user$.subscribe(data => {
      this.user = data;
    });
  }
}
