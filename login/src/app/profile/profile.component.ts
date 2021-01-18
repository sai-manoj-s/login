import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:string;
  meetingid:string=""

  constructor(private router:Router,private authserv:AuthService) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("userId")
  }
  gotoMeeting(){
   
     this.router.navigate(['start'])
  }

}
