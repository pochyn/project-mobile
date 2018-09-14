import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrApprovedPostsPage } from './gr-approved-posts';

@NgModule({
  declarations: [
    GrApprovedPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(GrApprovedPostsPage),
  ],
})
export class GrApprovedPostsPageModule {}
