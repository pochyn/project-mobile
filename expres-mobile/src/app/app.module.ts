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
import { GApprovedPostsPage } from "../pages/g/g-approved-posts/g-approved-posts";
import { GApprovedMediaplansPage } from "../pages/g/g-approved-mediaplans/g-approved-mediaplans";
import { GNewMediaplanPage } from "../pages/g/g-new-mediaplan/g-new-mediaplan";
import { GNewTopicPage } from "../pages/g/g-new-topic/g-new-topic";
import { GNewOchnaPage } from "../pages/g/g-new-ochna/g-new-ochna";
import { GShowPage } from "../pages/g/g-show/g-show";
import { AllShowMediaPage } from "../pages/all-show-media/all-show-media"

import { SoloApprovedMediaplansPage } from "../pages/solo/solo-approved-mediaplans/solo-approved-mediaplans";
import { SoloApprovedPostsPage } from "../pages/solo/solo-approved-posts/solo-approved-posts";
import { SoloDashboardPage } from "../pages/solo/solo-dashboard/solo-dashboard";
import { SoloNewPage } from "../pages/solo/solo-new/solo-new";
import { SoloNewMediaplanPage } from "../pages/solo/solo-new-mediaplan/solo-new-mediaplan";
import { SoloNewOchnaPage } from "../pages/solo/solo-new-ochna/solo-new-ochna";
import { SoloNewTopicPage } from "../pages/solo/solo-new-topic/solo-new-topic";
import { SoloShowPage } from "../pages/solo/solo-show/solo-show";

import { GazetaApprovedGazetaPage } from "../pages/or_gazeta/gazeta-approved-gazeta/gazeta-approved-gazeta"
import { GazetaApprovedMediaplansPage } from "../pages/or_gazeta/gazeta-approved-mediaplans/gazeta-approved-mediaplans"
import { GazetaApprovedSitePage } from "../pages/or_gazeta/gazeta-approved-site/gazeta-approved-site"
import { GazetaDashboardPage } from "../pages/or_gazeta/gazeta-dashboard/gazeta-dashboard"
import { GazetaNewPage } from "../pages/or_gazeta/gazeta-new/gazeta-new"
import { GazetaOchnaPage } from "../pages/or_gazeta/gazeta-ochna/gazeta-ochna"
import { GazetaShowPage } from "../pages/or_gazeta/gazeta-show/gazeta-show"
import { GazetaTopicPage } from "../pages/or_gazeta/gazeta-topic/gazeta-topic"

import { SiteApprovovedMediaplansPage } from "../pages/or-site/site-approvoved-mediaplans/site-approvoved-mediaplans"
import { SiteApprovovedSitePage } from "../pages/or-site/site-approvoved-site/site-approvoved-site"
import { SiteDashboardPage } from "../pages/or-site/site-dashboard/site-dashboard"
import { SiteNewPage } from "../pages/or-site/site-new/site-new"
import { SiteTopicPage } from "../pages/or-site/site-topic/site-topic"
import { SiteShowPage } from "../pages/or-site/site-show/site-show"

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
    GArchievePage,
    GApprovedPostsPage,
    GApprovedMediaplansPage,
    GNewMediaplanPage,
    GNewTopicPage,
    GNewOchnaPage,
    GShowPage,
    AllShowMediaPage,
    SoloApprovedMediaplansPage,
    SoloApprovedPostsPage,
    SoloDashboardPage,
    SoloNewMediaplanPage,
    SoloNewOchnaPage,
    SoloNewPage,
    SoloNewTopicPage,
    SoloShowPage,
    GazetaApprovedGazetaPage,
    GazetaApprovedMediaplansPage,
    GazetaApprovedSitePage,
    GazetaDashboardPage,
    GazetaNewPage,
    GazetaOchnaPage,
    GazetaShowPage,
    GazetaTopicPage,
    SiteApprovovedMediaplansPage,
    SiteApprovovedSitePage,
    SiteDashboardPage,
    SiteNewPage,
    SiteTopicPage,
    SiteShowPage
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
    GArchievePage,
    GApprovedPostsPage,
    GApprovedMediaplansPage,
    GNewTopicPage,
    GNewMediaplanPage,
    GNewOchnaPage,
    GShowPage,
    AllShowMediaPage,
    SoloApprovedMediaplansPage,
    SoloApprovedPostsPage,
    SoloDashboardPage,
    SoloNewMediaplanPage,
    SoloNewOchnaPage,
    SoloNewPage,
    SoloNewTopicPage,
    SoloShowPage,
    GazetaApprovedGazetaPage,
    GazetaApprovedMediaplansPage,
    GazetaApprovedSitePage,
    GazetaDashboardPage,
    GazetaNewPage,
    GazetaOchnaPage,
    GazetaShowPage,
    GazetaTopicPage,
    SiteApprovovedMediaplansPage,
    SiteApprovovedSitePage,
    SiteDashboardPage,
    SiteNewPage,
    SiteTopicPage,
    SiteShowPage
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
