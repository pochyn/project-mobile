import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrNewPage } from './gr-new';

@NgModule({
  declarations: [
    GrNewPage,
  ],
  imports: [
    IonicPageModule.forChild(GrNewPage),
  ],
})
export class GrNewPageModule {}
