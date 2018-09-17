import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import {KvNewPostPage} from '../kv-new-post/kv-new-post'
import {KvNewOchnaPage} from '../kv-new-ochna/kv-new-ochna'

import { GNewMediaplanPage } from '../../g/g-new-mediaplan/g-new-mediaplan'
/**
 * Generated class for the KvCreatePostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-kv-create-post',
  templateUrl: 'kv-create-post.html',
})
export class KvCreatePostPage {

 
  tab1Root = KvNewPostPage;
  tab2Root = GNewMediaplanPage;
  tab3Root = KvNewOchnaPage;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }
}
