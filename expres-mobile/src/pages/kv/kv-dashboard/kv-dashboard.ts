import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../../home/home';
import {GApprovedPostsPage} from '../../g/g-approved-posts/g-approved-posts'
import {KvCreatePostPage} from '../kv-create-post/kv-create-post'
import {KvNewPage} from '../kv-new/kv-new'
import {KvOwnPostsPage} from '../kv-own-posts/kv-own-posts'

/**
 * Generated class for the KvDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-kv-dashboard',
  templateUrl: 'kv-dashboard.html',
})
export class KvDashboardPage {

  tab1Root = KvNewPage;
  tab2Root = KvOwnPostsPage;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }


  create(){
    this.navCtrl.push(KvCreatePostPage);
  }

  logout(){
    this.navCtrl.push(HomePage);
  }
}
