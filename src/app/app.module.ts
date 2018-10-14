import { DestinyFinderComponent } from './components/destinies/destiny-details/destiny-details.component';
import { MyStatsComponent } from './components/my-stats/my-stats.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/misc/login/login.component';
import { RegisterComponent } from './components/misc/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { HeaderComponent } from './components/misc/header/header.component';
import { FooterComponent } from './components/misc/footer/footer.component';
import { MyDestiniesComponent } from './components/destinies/my-destinies/my-destinies.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserCardComponent } from './components/user/user-card/user-card.component';
import { FindUserPipe } from './shared/pipes/find-user.pipe';
import { UserFinderComponent } from './components/user/user-finder/user-finder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserProfileComponent,
    HeaderComponent,
    FooterComponent,
    MyStatsComponent,
    DestinyFinderComponent,
    MyDestiniesComponent,
    UserListComponent,
    UserCardComponent,
    FindUserPipe,
    UserFinderComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
