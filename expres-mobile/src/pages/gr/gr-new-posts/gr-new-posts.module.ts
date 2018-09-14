import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrNewPostsPage } from './gr-new-posts';

@NgModule({
  declarations: [
    GrNewPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(GrNewPostsPage),
  ],
})
export class GrNewPostsPageModule {}
