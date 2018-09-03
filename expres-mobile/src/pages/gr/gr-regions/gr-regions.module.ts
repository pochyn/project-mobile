import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrRegionsPage } from './gr-regions';

@NgModule({
  declarations: [
    GrRegionsPage,
  ],
  imports: [
    IonicPageModule.forChild(GrRegionsPage),
  ],
})
export class GrRegionsPageModule {}
