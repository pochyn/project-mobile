import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SiteApprovovedMediaplansPage} from '../site-approvoved-mediaplans/site-approvoved-mediaplans'
import {SiteApprovovedSitePage} from '../site-approvoved-site/site-approvoved-site'
import {SiteNewPage} from '../site-new/site-new'
import { HomePage } from '../../home/home';

/**
 * Generated class for the SiteDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-site-dashboard',
  templateUrl: 'site-dashboard.html',
})
export class SiteDashboardPage {

  tab2Root = SiteApprovovedMediaplansPage;
  tab3Root = SiteApprovovedSitePage;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }


  create(){
    this.navCtrl.push(SiteNewPage);
  }

  logout(){
    this.navCtrl.push(HomePage);
  }
}
