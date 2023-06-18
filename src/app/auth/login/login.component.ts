import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm!: FormGroup;
  public submitted : boolean = false;
  constructor(private router : Router, private fb : FormBuilder) {
    this.loginForm = this.fb.group({
      'username' : ['',Validators.required],
      'password' : ['',Validators.required]
    })
  }

  signIn(){
    this.submitted = true;
    console.log(this.loginForm)
    if(this.loginForm.status=="VALID"){
      console.log("hello")
      localStorage.setItem('username','chamsharma')
      this.router.navigate(['thesis-list']); 
    }
    
  }
}
