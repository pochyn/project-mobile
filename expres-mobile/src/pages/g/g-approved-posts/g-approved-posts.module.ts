import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GApprovedPostsPage } from './g-approved-posts';

@NgModule({
  declarations: [
    GApprovedPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(GApprovedPostsPage),
  ],
})
export class GApprovedPostsPageModule {}
