import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { throwIfEmpty } from 'rxjs';
import { AuthService } from '../@core/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password : new FormControl(''),
  });
  constructor(
    private router: Router,
    private authService : AuthService
  ) { }
  ngOnInit(): void {
  }

  goToSignup() {
    this.router.navigate([
      '/sign-up'
    ])
  }
  // logUser(e:Event){
  //   e.preventDefault();
  //   this.authService.logUser("kuku").subscribe(response=>{
  //     console.log(response)
  //   })
  // }
  logUser(e:Event){
    e.preventDefault();
    // this.authService.DataSend('/login',this.loginForm.value).subscribe((data)=>console.log(data));
    console.dir(JSON.stringify(this.loginForm.value))
    return this.authService.loginUser(this.loginForm.value).subscribe(response=>{
       console.log(response)
     })
  }
  
}
