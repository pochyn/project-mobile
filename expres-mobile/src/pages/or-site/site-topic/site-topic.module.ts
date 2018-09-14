import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteTopicPage } from './site-topic';

@NgModule({
  declarations: [
    SiteTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(SiteTopicPage),
  ],
})
export class SiteTopicPageModule {}
