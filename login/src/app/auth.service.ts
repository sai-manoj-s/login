import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { authData } from 'authData'

import { NotificationService } from './notification.service';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient,private notify:NotificationService,private route:Router) { }
  resmsg:string
  authdata:authData
  token:string

  login(uname: string, pwd: string) {
  var autheticate:string;
   this.http.post("http://192.168.29.153:3000/api/login",{userName:uname,password:pwd}).subscribe(response=>{
     if(response['message']==='incorrect password'){
      this.notify.showError("Incorrect username or password","INFO  ")
     }
     else if(response['message']==='incorrect username'){
      this.notify.showError("Incorrect username or password ","INFO"  )
     }
     else{
      localStorage.setItem("token", response['token']);
   
      localStorage.setItem("userId", response['userName']);
      this.route.navigate(['/profile'])
     
      this.getToken()
     return autheticate
     }
   });

   


  }




  register(fname:string, lname:string, uname:string, password:string){
    this.authdata={firstName:fname,lastName:lname,UserName:uname,password:password}
    this.http.post("http://192.168.29.153:3000/api/register",this.authdata,).subscribe(Response=>{
          
          if(Response['code']===201){
            this.notify.showError("UserName  already exist","INFO")
          }
          else{
            this.notify.showSuccess("account created go back to login page","INFO")
          }
     })
    
    
  }

  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('token');
    this.route.navigateByUrl('/');
  }
 
  public isLoggedIn(): boolean {
    
    if (this.token) {
      return true
    } else {
      return false;
    }
  }

  
    
  }
 