import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

import { GNewMediaplanPage } from '../../g/g-new-mediaplan/g-new-mediaplan'
import { GazetaOchnaPage } from '../gazeta-ochna/gazeta-ochna'
import { GazetaTopicPage } from '../gazeta-topic/gazeta-topic'

/**
 * Generated class for the GazetaNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-gazeta-new',
  templateUrl: 'gazeta-new.html',
})
export class GazetaNewPage {

  tab1Root = GazetaTopicPage;
  tab2Root = GNewMediaplanPage;
  tab3Root = GazetaOchnaPage;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }
}