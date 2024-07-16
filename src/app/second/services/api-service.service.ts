import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { Observable, map } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpService: HttpServiceService) {
  }
  getAllPst():Observable<User[]>{
    return this.httpService.get('/users')
    .pipe(map(data => data as User[]));
  }
}
