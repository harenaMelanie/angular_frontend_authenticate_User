import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserList } from '../@core/interface/user ';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public user : User = new User();
  
  constructor(
  private userListService : UserService
  ) { }
  ngOnInit(): void {
   this.userListService.getUsers().subscribe(( data : UserList)=> this.user ={
    email : data.email,
    password : data.password,
    id : data.id
   });
  }
  

}