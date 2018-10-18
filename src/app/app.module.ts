import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, ApplicationRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { GlobalErrorHandlerService } from './shared/handlers/global-error-handler';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/misc/login/login.component';
import { RegisterComponent } from './components/misc/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { HeaderComponent } from './components/misc/header/header.component';
import { MyDestiniesComponent } from './components/destinies/my-destinies/my-destinies.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserCardComponent } from './components/user/user-card/user-card.component';
import { UserFinderComponent } from './components/user/user-finder/user-finder.component';
import { MapComponent } from './components/destinies/map/map.component';
import { NotFoundComponent } from './components/misc/not-found/not-found.component';
import { RankingCardComponent } from './components/gamification/ranking-card/ranking-card.component';
import { RankingRunnersListComponent } from './components/gamification/ranking-runners-list/ranking-runners-list.component';
import { HatedListComponent } from './components/user/profile/hated-list/hated-list.component';
import { HatedCardComponent } from './components/user/profile/hated-card/hated-card.component';
import { UpsComponent } from './components/misc/ups/ups.component';
import { DestiniesCardComponent } from './components/destinies/destinies-card/destinies-card.component';
import { MyStatsComponent } from './components/gamification/my-stats/my-stats.component';
import { DestinyDetailsComponent } from './components/destinies/destiny-details/destiny-details.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'


import { FavsFilterPipe } from './shared/pipes/favs-filter.pipe';
import { FindDestinyPipe } from './shared/pipes/find-destiny.pipe';
import { FindUserPipe } from './shared/pipes/find-user.pipe';
import { PipesPipe } from './shared/pipes/hated-filter.pipe';
import { ToastDefaults, SnotifyService } from 'ng-snotify';
import { FooterComponent } from './components/misc/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserProfileComponent,
    HeaderComponent,
    MyStatsComponent,
    DestinyDetailsComponent,
    MyDestiniesComponent,
    UserListComponent,
    UserCardComponent,
    FindUserPipe,
    UserFinderComponent,
    MapComponent,
    NotFoundComponent,
    UpsComponent,
    DestiniesCardComponent,
    FavsFilterPipe,
    RankingCardComponent,
    RankingRunnersListComponent,
    HatedListComponent,
    HatedCardComponent,
    FindDestinyPipe,
    PipesPipe,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule, 
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBaWJRBFCUYVRpyLEpJBrl8eB08XFGf7pY'
    })
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }, { 
      provide: 'SnotifyToastConfig', 
      useValue: ToastDefaults},
      SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
