import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteShowPage } from './site-show';

@NgModule({
  declarations: [
    SiteShowPage,
  ],
  imports: [
    IonicPageModule.forChild(SiteShowPage),
  ],
})
export class SiteShowPageModule {}
