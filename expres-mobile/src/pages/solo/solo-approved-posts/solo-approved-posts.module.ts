import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoloApprovedPostsPage } from './solo-approved-posts';

@NgModule({
  declarations: [
    SoloApprovedPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(SoloApprovedPostsPage),
  ],
})
export class SoloApprovedPostsPageModule {}
