import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrNewSitePage } from './gr-new-site';

@NgModule({
  declarations: [
    GrNewSitePage,
  ],
  imports: [
    IonicPageModule.forChild(GrNewSitePage),
  ],
})
export class GrNewSitePageModule {}
