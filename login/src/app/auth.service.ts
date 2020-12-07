import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { authData } from 'authData'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  register(fname:string, lname:string, uname:string, password:string){
    const authData: authData={firstName:fname,lastName:lname,UserName:uname,password:password}
  
    this.http.post("http://localhost:3000/api/register",authData, {responseType: 'text'}).subscribe(response=>{
    
    })
    
  }
}
