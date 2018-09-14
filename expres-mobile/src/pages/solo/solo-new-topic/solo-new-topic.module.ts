import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoloNewTopicPage } from './solo-new-topic';

@NgModule({
  declarations: [
    SoloNewTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(SoloNewTopicPage),
  ],
})
export class SoloNewTopicPageModule {}
