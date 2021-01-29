import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthgaurdService } from './authgaurd.service';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { MymeetingComponent } from './mymeeting/mymeeting.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'register',component: FormComponent},
  {path: 'profile',component: ProfileComponent,canActivate:[AuthgaurdService]},
  {path: 'start',component: MymeetingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
