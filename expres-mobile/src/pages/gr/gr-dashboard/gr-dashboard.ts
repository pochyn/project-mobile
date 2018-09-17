import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { GrNewPage } from '../gr-new/gr-new'
import { HomePage } from '../../home/home';
import {GApprovedPostsPage} from '../../g/g-approved-posts/g-approved-posts'
import {GrApprovedPostsPage} from '../gr-approved-posts/gr-approved-posts'
import {GrNewPostsPage} from '../gr-new-posts/gr-new-posts'
import {GrCreatePostPage} from '../gr-create-post/gr-create-post'


/**
 * Generated class for the GrDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// post inteface
interface Post {
  author: string;
  name: string;
  date: string;
  branch: string;
  content: string;
  link: string;
  source: string;
  comments: string;
  checked: boolean;
  read: boolean;
  deadline: string;
  sourceDate: Date;
  submitDate: Date;
  gazeta_type: boolean;
  site_type: boolean;
  lviv_type: boolean;
  regions_type: boolean;
  archieved: boolean;
  archieved_g: boolean;
  archieved_kv: boolean;
  archieved_or: boolean;
  archieved_gr: boolean;
  delete_g: boolean;
  delete_kv: boolean;
  delete_or: boolean;
  delete_gr: boolean;
  checked_gazeta: boolean;
  checked_site: boolean;
  checked_lviv: boolean;
  checked_regions: boolean;
  date_modified: any;
}
interface PostId extends Post { 
  id: string; 
}
//to get data from database


@Component({
  selector: 'page-gr-dashboard',
  templateUrl: 'gr-dashboard.html',
})
export class GrDashboardPage {
  tab1Root = GrNewPostsPage;
  tab2Root = GrApprovedPostsPage;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }


  create(){
    this.navCtrl.push(GrCreatePostPage);
  }

  logout(){
    this.navCtrl.push(HomePage);
  }
}
