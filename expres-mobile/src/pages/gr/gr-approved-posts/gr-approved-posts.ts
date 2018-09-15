import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GApprovedPostsPage} from '../../g/g-approved-posts/g-approved-posts'
import {GApprovedMediaplansPage} from '../../g/g-approved-mediaplans/g-approved-mediaplans'
import {GrLvivPage} from '../gr-lviv/gr-lviv'
import {GrRegionsPage} from '../gr-regions/gr-regions'
import {GrSitePage}from '../gr-site/gr-site'
import {GrNegazetaPage} from '../gr-negazeta/gr-negazeta'
import {GrApprovedMediaplansPage} from '../gr-approved-mediaplans/gr-approved-mediaplans'

/**
 * Generated class for the GrApprovedPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gr-approved-posts',
  templateUrl: 'gr-approved-posts.html',
})
export class GrApprovedPostsPage {
  tab1Root = GrNegazetaPage;
  tab2Root = GrSitePage;
  tab3Root = GrLvivPage;
  tab4Root = GrRegionsPage;
  tab5Root = GrApprovedMediaplansPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrApprovedPostsPage');
  }

}
