import { DestinyDetailsComponent } from './components/destinies/destiny-details/destiny-details.component';
import { MyStatsComponent } from './components/gamification/my-stats/my-stats.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, ApplicationRef } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/misc/login/login.component';
import { RegisterComponent } from './components/misc/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { HeaderComponent } from './components/misc/header/header.component';
// import { FooterComponent } from './components/misc/footer/footer.component';
import { MyDestiniesComponent } from './components/destinies/my-destinies/my-destinies.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserCardComponent } from './components/user/user-card/user-card.component';
import { FindUserPipe } from './shared/pipes/find-user.pipe';
import { UserFinderComponent } from './components/user/user-finder/user-finder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'


import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './components/destinies/map/map.component';
import { NotFoundComponent } from './components/misc/not-found/not-found.component';
import { GlobalErrorHandlerService } from './shared/handlers/global-error-handler';
import { UpsComponent } from './components/misc/ups/ups.component';
// import { MyFavsComponent } from './components/my-favs/my-favs.component';
import { DestiniesCardComponent } from './components/destinies/destinies-card/destinies-card.component';
import { FavsFilterPipe } from './shared/pipes/favs-filter.pipe';
// import { RankingListComponent } from './components/gamification/ranking-list/ranking-list.component';
import { RankingCardComponent } from './components/gamification/ranking-card/ranking-card.component';
import { RankingRunnersListComponent } from './components/gamification/ranking-runners-list/ranking-runners-list.component';
import { RunnersFilterPipe } from './shared/pipes/runners-filter.pipe';
// import { UserFuckOffEmailComponent, DialogOverviewExampleDialog } from './components/user/user-fuck-off-email/user-fuck-off-email.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserProfileComponent,
    HeaderComponent,
    // FooterComponent,
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
    // MyFavsComponent,
    DestiniesCardComponent,
    FavsFilterPipe,
    // RankingListComponent,
    RankingCardComponent,
    RankingRunnersListComponent,
    RunnersFilterPipe,
    // DialogOverviewExampleDialog,
    // UserFuckOffEmailComponent

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
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBaWJRBFCUYVRpyLEpJBrl8eB08XFGf7pY'
    })
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
