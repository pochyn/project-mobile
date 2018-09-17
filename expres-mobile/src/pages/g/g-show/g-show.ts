import { Component, Injector, ViewChild, ElementRef, NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { GNewPage } from '../g-new/g-new';
import { GArchievePage}  from '../g-archieve/g-archieve';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { GApprovedMediaplansPage } from '../g-approved-mediaplans/g-approved-mediaplans'
import { GApprovedPostsPage } from '../g-approved-posts/g-approved-posts'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {MatDialog} from '@angular/material';
import { AuthProvider } from '../../../providers/auth/auth';
import { GDashboardPage}  from '../g-dashboard/g-dashboard';
import * as moment from 'moment';

/**
 * Generated class for the GShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Post {
  author: string;
  name: string;
  date: string;
  title: string;
  branch: string;
  content: string;
  link: string;
  source: string;
  comments: string;
  checked: boolean;
  read: boolean;
  deadline: string;
  sourceDate: Date;
  submitDate: Date;
  gazeta_type: boolean;
  site_type: boolean;
  lviv_type: boolean;
  regions_type: boolean;
  archieved: boolean;
  archieved_g: boolean;
  archieved_kv: boolean;
  archieved_or: boolean;
  archieved_gr: boolean;
  delete_g: boolean;
  delete_kv: boolean;
  delete_or: boolean;
  delete_gr: boolean;
  checked_gazeta: boolean;
  checked_site: boolean;
  checked_lviv: boolean;
  checked_regions: boolean;
  date_modified: any;
  to_nascrizni: any;
  mediaplan_gazeta: boolean;
  mediaplan_lviv: boolean;
  mediaplan_site: boolean;
  mediaplan_regions: boolean;

}

interface PostId extends Post { 
  id: string; 
}

@Component({
  selector: 'page-g-show',
  templateUrl: 'g-show.html',
})
export class GShowPage {
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;
  regime: any;
  author: string;
  name: string;
  date: string;
  branch: string;
  content: string;
  link: string;
  source: string;
  comments: string;
  checked: boolean;
  read: boolean;
  deadline: string;
  sourceDate: Date;
  submitDate: Date;
  gazeta_type: boolean;
  site_type: boolean;
  lviv_type: boolean;
  regions_type: boolean;
  archieved_g: boolean;
  archieved_kv: boolean;
  archieved_or: boolean;
  archieved_gr: boolean;
  delete_g: boolean;
  delete_kv: boolean;
  delete_or: boolean;
  delete_gr: boolean;
  checked_gazeta: boolean;
  checked_site: boolean;
  checked_lviv: boolean;
  checked_regions: boolean;
  date_modified: any;
  by_gr: any;
  priority: any;
  ochna: any;
  to_nascrizni: any;
  mediaplan_gazeta: boolean;
  mediaplan_lviv: boolean;
  mediaplan_site: boolean;
  mediaplan_regions: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore) {
  }
  post: any;
  data: any;
  selected_types: any;
  deadln: any;
  comm: any;
  users = {};
  types = ['Газета', 'Сайт', 'Львів', 'Регіони'];
  hours = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
  selected: any;
  selected_hour: any;
  journ = [];
  public local = [];
  type = '';

  ionViewDidLoad() {
    this.post = this.navParams.get('param'); 
    this.data = this.post.data;
    if (this.data['gazeta_type']){
      this.type = 'Загальні ' + this.type;
    }
    if (this.data['site_type']){
      this.type = 'Сайт ' + this.type;
    }
    if (this.data['regions_type']){
      this.type = 'Регіональні ' + this.type;
    }
    if (this.data['lviv_type']){
      this.type = 'Львівські ' + this.type;
    }
  }

  archieve(){
    this.afs.doc('posts/'+this.post.id).update({archieved_g: true});
    this.navCtrl.pop()
  }

  formatTodayDate() {
    var today = new Date();
    let dt = moment(today).format("h:mm, DD/MM/YY");
    return dt
  }

 

  changePost(){

    if (this.comm != undefined &&  this.comm != ''){
      this.afs.doc('posts/'+this.post.id).update({comments: this.data['comments'] + " (ЖУРНАЛІСТ): " +this.comm});
      var modified_dt = this.formatTodayDate();
      this.afs.doc('posts/'+this.post.id).update({date_modified: modified_dt});
    }
    this.comm = '';
    let collRef1 = this.afs.collection('posts').ref;
    let queryRef1 = collRef1;
    queryRef1.get().then((snapShot) => {
        for( let dock of snapShot.docs){
          if (dock.id == this.post.id){
            this.data = dock.data();
          }
        }
    });
  }

}
