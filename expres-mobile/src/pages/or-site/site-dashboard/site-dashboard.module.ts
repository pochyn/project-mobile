import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteDashboardPage } from './site-dashboard';

@NgModule({
  declarations: [
    SiteDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(SiteDashboardPage),
  ],
})
export class SiteDashboardPageModule {}
