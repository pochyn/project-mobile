import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoloDashboardPage } from './solo-dashboard';

@NgModule({
  declarations: [
    SoloDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(SoloDashboardPage),
  ],
})
export class SoloDashboardPageModule {}
