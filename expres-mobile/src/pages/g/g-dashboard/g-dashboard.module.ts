import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GDashboardPage } from './g-dashboard';

@NgModule({
  declarations: [
    GDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(GDashboardPage),
  ],
})
export class GDashboardPageModule {}
