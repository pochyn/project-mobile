import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { SoloNewPage } from '../solo-new/solo-new';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { SoloApprovedMediaplansPage } from '../solo-approved-mediaplans/solo-approved-mediaplans'
import { SoloApprovedPostsPage } from '../solo-approved-posts/solo-approved-posts'
import { HomePage } from '../../home/home';
/**
 * Generated class for the GDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 // post inteface


@Component({
  selector: 'page-solo-dashboard',
  templateUrl: 'solo-dashboard.html',
})
export class SoloDashboardPage {
  tab1Root = SoloApprovedPostsPage;
  tab2Root = SoloApprovedMediaplansPage;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }


  create(){
    this.navCtrl.push(SoloNewPage);
  }

  logout(){
    this.navCtrl.push(HomePage);
  }

}