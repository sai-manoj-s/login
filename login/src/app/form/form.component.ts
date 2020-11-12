import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  matchingPasswords = (control: AbstractControl): {[key: string]: boolean} =>{

    const newPassword = control.get('passwords');
    const confirmPassword = control.get('confirmpwd');
    // if no values, valid
    if (!newPassword || !confirmPassword) {
      return null;
    } 
    console.log("test")
    // if values match return null, else 'mismatchedPasswords:true'  
    return newPassword.value === confirmPassword.value ? null : { mismatchedPasswords: true };
  }    
  registration: FormGroup= new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName:  new FormControl('',[Validators.required]),
    userName:  new FormControl('',[Validators.required]),
    password:  new FormControl('',[Validators.required,Validators.min(8)]),
    cPassword: new FormControl('',[Validators.required,Validators.min(8)])

  }, this.matchingPasswords);


}
