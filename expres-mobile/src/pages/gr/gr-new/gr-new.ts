import { Component, Injector, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {GrCreateMediaPage} from '../gr-create-media/gr-create-media'
import {GrCreatePostPage} from '../gr-create-post/gr-create-post'
import { GNewMediaplanPage } from '../../g/g-new-mediaplan/g-new-mediaplan'

@Component({
  selector: 'page-gr-new',
  templateUrl: 'gr-new.html',
})

export class GrNewPage {
  tab1Root = GrCreatePostPage;
  tab2Root = GNewMediaplanPage;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }
}