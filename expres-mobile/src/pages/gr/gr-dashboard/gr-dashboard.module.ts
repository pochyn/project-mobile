import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrDashboardPage } from './gr-dashboard';

@NgModule({
  declarations: [
    GrDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(GrDashboardPage),
  ],
})
export class GrDashboardPageModule {}
