import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { GazetaApprovedGazetaPage } from '../gazeta-approved-gazeta/gazeta-approved-gazeta'
import { GazetaApprovedMediaplansPage } from '../gazeta-approved-mediaplans/gazeta-approved-mediaplans'
import { GazetaApprovedSitePage } from '../gazeta-approved-site/gazeta-approved-site'
import { GazetaNewPage } from '../gazeta-new/gazeta-new'

import { HomePage } from '../../home/home';


/**
 * Generated class for the GDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 // post inteface

@Component({
  selector: 'page-gazeta-dashboard',
  templateUrl: 'gazeta-dashboard.html',
})
export class GazetaDashboardPage {

  tab1Root = GazetaApprovedGazetaPage;
  tab2Root = GazetaApprovedMediaplansPage;
  tab3Root = GazetaApprovedSitePage;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }


  create(){
    this.navCtrl.push(GazetaNewPage);
  }

  logout(){
    this.navCtrl.push(HomePage);
  }
}
