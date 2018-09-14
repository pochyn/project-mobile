import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoloNewPage } from './solo-new';

@NgModule({
  declarations: [
    SoloNewPage,
  ],
  imports: [
    IonicPageModule.forChild(SoloNewPage),
  ],
})
export class SoloNewPageModule {}
