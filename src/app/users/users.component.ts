import { Component, OnInit } from '@angular/core';
import { GeometryService } from '../services/geometry.service';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

   users: User[] = [];
   user: User;
   error = {};
   search_text: string;

  constructor(private userService: GeometryService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => this.error = error
    );
  }

  getUserbyid(id){
    this.userService.getUserByid(+id).subscribe(
      (data: User)=> this.user = data,
      (error) => this.error = error
    );
  }

}
