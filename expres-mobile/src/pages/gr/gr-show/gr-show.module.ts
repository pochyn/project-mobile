import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrShowPage } from './gr-show';

@NgModule({
  declarations: [
    GrShowPage,
  ],
  imports: [
    IonicPageModule.forChild(GrShowPage),
  ],
})
export class GrShowPageModule {}
