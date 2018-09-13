import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GShowPage } from './g-show';

@NgModule({
  declarations: [
    GShowPage,
  ],
  imports: [
    IonicPageModule.forChild(GShowPage),
  ],
})
export class GShowPageModule {}
