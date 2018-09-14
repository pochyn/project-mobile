import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GazetaTopicPage } from './gazeta-topic';

@NgModule({
  declarations: [
    GazetaTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(GazetaTopicPage),
  ],
})
export class GazetaTopicPageModule {}
