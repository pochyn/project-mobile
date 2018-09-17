import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {KvAprovedPostsPage} from '../kv-aproved-posts/kv-aproved-posts'
import {KvAprovedMediaplansPage} from '../kv-aproved-mediaplans/kv-aproved-mediaplans'

/**
 * Generated class for the KvOwnPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-kv-own-posts',
  templateUrl: 'kv-own-posts.html',
})
export class KvOwnPostsPage {
  tab1Root = KvAprovedPostsPage;
  tab2Root = KvAprovedMediaplansPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KvOwnPostsPage');
  }

}
