import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
//import { GamePage } from '../pages/game/game';
//import { MyTeamsPage } from '../pages/my-teams/my-teams';
//import { TeamDetailPage } from '../pages/team-detail/team-detail';
//import { TeamsPage } from '../pages/teams/teams';
//import { TournamentsPage } from '../pages/tournaments/tournaments';

import { TournamentsPage, TeamsPage, TeamDetailPage, MyTeamsPage, GamePage} from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GamePage,
    MyTeamsPage,
    TeamDetailPage,
    TeamsPage,
    TournamentsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage, 
    GamePage,
    MyTeamsPage,
    TeamDetailPage,
    TeamsPage,
    TournamentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
