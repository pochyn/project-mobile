import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { GArchievePage}  from '../g-archieve/g-archieve';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { GApprovedMediaplansPage } from '../g-approved-mediaplans/g-approved-mediaplans'
import { GApprovedPostsPage } from '../g-approved-posts/g-approved-posts'
import { GNewMediaplanPage } from '../g-new-mediaplan/g-new-mediaplan'
import { GNewTopicPage } from '../g-new-topic/g-new-topic'
import { GNewOchnaPage } from '../g-new-ochna/g-new-ochna'


/**
 * Generated class for the GNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-g-new',
  templateUrl: 'g-new.html',
})
export class GNewPage {

  tab1Root = GNewTopicPage;
  tab2Root = GNewMediaplanPage;
  tab3Root = GNewOchnaPage;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }
}