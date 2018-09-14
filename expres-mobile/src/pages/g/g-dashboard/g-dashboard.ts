import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { GNewPage } from '../g-new/g-new';
import { GArchievePage}  from '../g-archieve/g-archieve';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { GApprovedMediaplansPage } from '../g-approved-mediaplans/g-approved-mediaplans';
import { GApprovedPostsPage } from '../g-approved-posts/g-approved-posts';
import { HomePage } from '../../home/home';

/**
 * Generated class for the GDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 // post inteface


@IonicPage()
@Component({
  selector: 'page-g-dashboard',
  templateUrl: 'g-dashboard.html',
})
export class GDashboardPage {
  tab1Root = GApprovedPostsPage;
  tab2Root = GApprovedMediaplansPage;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }


  create(){
    this.navCtrl.push(GNewPage);
  }

  logout(){
    this.navCtrl.push(HomePage);
  }

}
