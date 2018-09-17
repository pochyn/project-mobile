import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GApprovedPostsPage} from '../../g/g-approved-posts/g-approved-posts'
import {GApprovedMediaplansPage} from '../../g/g-approved-mediaplans/g-approved-mediaplans'
import {GrNewGazetaPage} from '../gr-new-gazeta/gr-new-gazeta'
import {GrNewLvivPage} from '../gr-new-lviv/gr-new-lviv'
import {GrNewRegionsPage}from '../gr-new-regions/gr-new-regions'
import {GrNewSitePage} from '../gr-new-site/gr-new-site'
import {GrNewMediaplansPage} from '../gr-new-mediaplans/gr-new-mediaplans'
/**
 * Generated class for the GrNewPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-gr-new-posts',
  templateUrl: 'gr-new-posts.html',
})
export class GrNewPostsPage {
  tab1Root = GrNewGazetaPage;
  tab2Root = GrNewSitePage;
  tab3Root = GrNewLvivPage;
  tab4Root = GrNewRegionsPage;
  tab5Root = GrNewMediaplansPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrNewPostsPage');
  }

}
