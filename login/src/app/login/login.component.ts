import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  


  constructor() { }

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
   console.log("test")
 }
 getErrorMessage() {
  if (this.signin.get('password').hasError('required')) {
    return 'You must enter password';
  }

  return  '';
}


}
