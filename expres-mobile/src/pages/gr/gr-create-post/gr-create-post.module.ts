import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrCreatePostPage } from './gr-create-post';

@NgModule({
  declarations: [
    GrCreatePostPage,
  ],
  imports: [
    IonicPageModule.forChild(GrCreatePostPage),
  ],
})
export class GrCreatePostPageModule {}
