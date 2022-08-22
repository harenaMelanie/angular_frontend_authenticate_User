import { Component, OnInit } from '@angular/core';
import { AuthService } from '../@core/service/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-signUp',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {


  profileForm!: FormGroup;

  

    constructor(private authService : AuthService, private fb: FormBuilder){ 
    }
 

  ngOnInit(): void {
    console.log('init signup instance');
    this.profileForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      role:['',[Validators.required]],
      password: ['', [Validators.required]] 
    })
  }
  
  signUpUser(e:Event){
    e.preventDefault()
    console.log('signup form sent');
    
    console.dir(JSON.stringify(this.profileForm.value))
   return this.authService.signupUser(this.profileForm.value).subscribe(response=>{
      console.log(response)
    })
  }
}

   

 