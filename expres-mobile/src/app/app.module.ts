import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ResetPage } from '../pages/reset/reset';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { GrDashboardPage } from '../pages/gr/gr-dashboard/gr-dashboard';
import { GrShowPage } from '../pages/gr/gr-show/gr-show';
import { GrNewPage } from '../pages/gr/gr-new/gr-new';
import { GrSitePage } from '../pages/gr/gr-site/gr-site';
import { GrLvivPage } from '../pages/gr/gr-lviv/gr-lviv';
import { GrRegionsPage } from '../pages/gr/gr-regions/gr-regions';
import { GrArchievePage } from '../pages/gr/gr-archieve/gr-archieve';
import { GDashboardPage } from '../pages/g/g-dashboard/g-dashboard';
import { GNewPage} from '../pages/g/g-new/g-new';
import { GArchievePage } from "../pages/g/g-archieve/g-archieve";

import { AuthProvider } from '../providers/auth/auth';
import { AuthguardProvider } from '../providers/authguard/authguard';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { ENV } from '../environments/environment'
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResetPage,
    SignUpPage,
    GrDashboardPage,
    GrShowPage,
    GrNewPage,
    GrSitePage,
    GrLvivPage,
    GrRegionsPage,
    GrArchievePage,
    GDashboardPage,
    GNewPage,
    GArchievePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(ENV.config),
    AngularFirestoreModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResetPage,
    SignUpPage,
    GrDashboardPage,
    GrShowPage,
    GrNewPage,
    GrSitePage,
    GrLvivPage,
    GrRegionsPage,
    GrArchievePage,
    GDashboardPage,
    GNewPage,
    GArchievePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AuthguardProvider,
    AngularFireAuth
  ]
})
export class AppModule {}
