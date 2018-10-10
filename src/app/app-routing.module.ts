import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/misc/login/login.component';
import { RegisterComponent } from './components/misc/register/register.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDestiniesComponent } from './components/my-destinies/my-destinies.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'users/:id', component: UserProfileComponent},
  { path: 'users/:id/myDestinies', component: MyDestiniesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// [`/users/${user.id}/myDestinies`]