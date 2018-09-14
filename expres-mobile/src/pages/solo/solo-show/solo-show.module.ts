import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoloShowPage } from './solo-show';

@NgModule({
  declarations: [
    SoloShowPage,
  ],
  imports: [
    IonicPageModule.forChild(SoloShowPage),
  ],
})
export class SoloShowPageModule {}
