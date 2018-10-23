import { RankingRunnersListComponent } from './components/gamification/ranking-runners-list/ranking-runners-list.component';
import { UpsComponent } from './components/misc/ups/ups.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { DestinyDetailsComponent } from './components/destinies/destiny-details/destiny-details.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/misc/login/login.component';
import { RegisterComponent } from './components/misc/register/register.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDestiniesComponent } from './components/destinies/my-destinies/my-destinies.component';
import { NotFoundComponent } from './components/misc/not-found/not-found.component';


const routes: Routes = [

  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'users', canActivate: [AuthGuard], component: UserListComponent},
  { path: 'users/:id', canActivate: [AuthGuard], component: HomeComponent},
  
  { path: 'users/:id/profile', canActivate: [AuthGuard], component: UserProfileComponent},

  { path: 'users/:id/myDestinies', canActivate: [AuthGuard], component: MyDestiniesComponent},
  { path: 'users/:id/stats', canActivate: [AuthGuard], component: RankingRunnersListComponent},

  { path: 'destinies/:id', canActivate: [AuthGuard], component: DestinyDetailsComponent},
  
  { path: '404', component: NotFoundComponent},
  { path: 'ups', component: UpsComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }