import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrSitePage } from './gr-site';

@NgModule({
  declarations: [
    GrSitePage,
  ],
  imports: [
    IonicPageModule.forChild(GrSitePage),
  ],
})
export class GrSitePageModule {}
