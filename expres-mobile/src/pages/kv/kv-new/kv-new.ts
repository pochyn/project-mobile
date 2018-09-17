import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {KvNewGazetaPage} from '../kv-new-gazeta/kv-new-gazeta'
import {KvNewLvivPage} from '../kv-new-lviv/kv-new-lviv'
import {KvNewRegionsPage} from '../kv-new-regions/kv-new-regions'
/**
 * Generated class for the KvNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-kv-new',
  templateUrl: 'kv-new.html',
})
export class KvNewPage {

  tab1Root = KvNewGazetaPage;
  tab2Root = KvNewLvivPage;
  tab3Root = KvNewRegionsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrNewPostsPage');
  }

}
