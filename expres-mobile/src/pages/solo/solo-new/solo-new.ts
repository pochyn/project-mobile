import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { SoloNewMediaplanPage } from '../solo-new-mediaplan/solo-new-mediaplan'
import { SoloNewTopicPage } from '../solo-new-topic/solo-new-topic'
import { SoloNewOchnaPage } from '../solo-new-ochna/solo-new-ochna'

import { GNewMediaplanPage } from '../../g/g-new-mediaplan/g-new-mediaplan'


/**
 * Generated class for the GNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-solo-new',
  templateUrl: 'solo-new.html',
})
export class SoloNewPage {


  tab1Root = SoloNewTopicPage;
  tab2Root = GNewMediaplanPage;
  tab3Root = SoloNewOchnaPage;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }
}