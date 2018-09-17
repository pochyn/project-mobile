import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SiteTopicPage} from '../site-topic/site-topic'
import { GNewMediaplanPage } from '../../g/g-new-mediaplan/g-new-mediaplan'

/**
 * Generated class for the SiteNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-site-new',
  templateUrl: 'site-new.html',
})
export class SiteNewPage {

  tab1Root = SiteTopicPage;
  tab2Root = GNewMediaplanPage;


  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }
}