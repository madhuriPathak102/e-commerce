import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [``]
})
export class UsersComponent implements OnInit{
  users: User[] = [];
  constructor(private apiService:ApiServiceService){}
  ngOnInit(): void {
   this.fetchData();
  }
  fetchData(){
this.apiService.getAllPst().subscribe(data=>{
  this.users = data
  console.log('fetchData :',data);
  
})
  }

}
