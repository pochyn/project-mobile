import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GNewTopicPage } from './g-new-topic';

@NgModule({
  declarations: [
    GNewTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(GNewTopicPage),
  ],
})
export class GNewTopicPageModule {}
