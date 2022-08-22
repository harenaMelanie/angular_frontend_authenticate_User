import { Component, OnInit } from '@angular/core';
import { AuthService } from '../@core/service/auth.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    
  }

  allUser(){
    this.authservice.addToListUser().subscribe((user:any)=>{
      console.log(user.success)
      if(user.success== false){
        console.log('user is not authorized')
      }
      else{
        console.log('invalid token')
      }
    })
  }

}
