import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'
import { NotificationService } from './../notification.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  mismatcherror:string="";
  fillmsg: string="";

  constructor(public authservice:AuthService,public notify:NotificationService) { }

  ngOnInit(): void {
  }
  matchingPasswords=(control:FormGroup)=>{

    const newPassword = control.get('password');
    const confirmPassword = control.get('cPassword');
    // if no values, valid
    if (!newPassword || !confirmPassword) {
      return null;
    } 
  
    if(newPassword.value != confirmPassword.value){
      this.mismatcherror="password mismatch"
    }
    else{
      this.mismatcherror=""
    }
 
    // if values match return null, else 'mismatchedPasswords:true'  
    return newPassword.value === confirmPassword.value ? null : { mismatchedPasswords: true }
  }    
  registration: FormGroup= new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName:  new FormControl('',[Validators.required]),
    userName:  new FormControl('',[Validators.required]),
    password:  new FormControl('',[Validators.required,Validators.minLength(8)]),
    cPassword: new FormControl('',[Validators.required,Validators.minLength(8)])

  },  {validators: this.matchingPasswords});
  getmessage(){
    return "minimum 8 charachters required"
  }
  onlyAlpha(){
    return "name should not contain numbers"
  }


  onSubmit(){
    console.log(this.registration)
    if(this.registration.value.firstName===""||this.registration.value.lastName===""||this.registration.value.userName===""||this.registration.value.password===""||this.registration.value.cPassword===""){
    
      this.fillmsg="*fill all fields."
      return
    }
 this.authservice.register(this.registration.value.firstName,this.registration.value.lastName,this.registration.value.userName,this.registration.value.password)

    
  }

  showToasterSuccess(){
    this.notify.showSuccess("sucess","teest")
  }
  
  


}
