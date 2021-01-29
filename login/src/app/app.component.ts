import { Component,OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { TokenstorageService } from './tokenstorage.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  isLoggedIn = false;
  constructor(private tokenStorageService: TokenstorageService,public authService: AuthService) { }


  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

  }  

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
