import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GazetaDashboardPage } from './gazeta-dashboard';

@NgModule({
  declarations: [
    GazetaDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(GazetaDashboardPage),
  ],
})
export class GazetaDashboardPageModule {}
