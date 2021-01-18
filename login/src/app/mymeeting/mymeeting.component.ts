import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-mymeeting',
  templateUrl: './mymeeting.component.html',
  styleUrls: ['./mymeeting.component.css']
})
export class MymeetingComponent implements OnInit {


  
  @ViewChild('myVideo')
  myVideo: ElementRef<HTMLVideoElement>
 
    
    name = 'Set iframe source';
  url: string = "https://finalcallapp.herokuapp.com/";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
   
   
  

}
