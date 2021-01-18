import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  


  constructor(private authserv:AuthService,private route: Router) { }

  ngOnInit(): void {
  }

  signin: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(5) ])
  });
  hide = true;
  get emailInput() { return this.signin.get('username'); }
  get passwordInput() { return this.signin.get('password'); }  
  onSubmit(){
  this.authserv.login(this.signin.value.username,this.signin.value.password)
    
  }
 getErrorMessage() {
  if (this.signin.get('password').hasError('required')) {
    return 'You must enter password';
  }

  return  '';
}


}
