import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { GrNewPage } from '../gr-new/gr-new';

import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { IonicApp } from 'ionic-angular/index';
import { AuthProvider } from '../../../providers/auth/auth';
import { Pipe, PipeTransform } from '@angular/core';
import { AlertController } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the GrDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// post inteface
interface Post {
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
  mediaplan_gazeta: boolean;
  mediaplan_lviv: boolean;
  mediaplan_site: boolean;
  mediaplan_regions: boolean;
  date_modified: any;
  nascrizna: boolean;
  to_nascrizni: any;
}
interface PostId extends Post { 
  id: string; 
}

@IonicPage()
@Component({
  selector: 'page-gr-show',
  templateUrl: 'gr-show.html',
})
export class GrShowPage {
  postsColGaz: AngularFirestoreCollection<Post>;
  postsColSite: AngularFirestoreCollection<Post>;
  postsColLviv: AngularFirestoreCollection<Post>;
  postsColRegions: AngularFirestoreCollection<Post>;
  postsColApp: AngularFirestoreCollection<Post>;
  postDoc: AngularFirestoreDocument<Post>;

  
  // needed to show post data
  content:string;
  author: string;
  condition_checker: any;
  
  //all posts of neede type
  
  posts: any;
  sites: any;
  lviv: any;
  regions: any;
  
  br: any;
  notFiltered: any;

  post:any;
  data: any;
  type: any;
  all_nascrizni = [];
  journ = [];
  users = [];
  added_to_nascrizni: any;
  to_nascrizni: any;
  comm: any; 
  types = ['Газета', 'Сайт', 'Львів', 'Регіони'];
  priorities = ['▁', '▄', '█'];
  hours = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
  priority:any;
  priority_selected: any;
  deadln: any;
  selected_hour:any;
  selected:any;
  selected_types: any;

  postsData = new MatTableDataSource(this.posts);
  sitesData = new MatTableDataSource(this.sites);
  lvivData = new MatTableDataSource(this.lviv);
  regionsData = new MatTableDataSource(this.regions);

  
  nascriznyy = false;
  nascr_name = '';
  private auth: AuthProvider;
  testCheckboxOpen: any;
  testCheckboxResult: any;
  constructor(public alertCtrl: AlertController, private afauth: AngularFireAuth, public app: IonicApp, public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore, injector: Injector) {
    setTimeout(() => this.auth = injector.get(AuthProvider));
  }
  ionViewDidLoad() {
    this.testCheckboxResult = []
    this.added_to_nascrizni = [];
    this.to_nascrizni = '';
    this.priority_selected = '';

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

    let collRef1 = this.afs.collection('nascrizni').ref;
    let queryRef1 = collRef1;
    queryRef1.get().then((snapShot) => {
        for( let dock of snapShot.docs){
          this.all_nascrizni.push(dock.data()['name']);
        }
    });

    let collRef = this.afs.collection('users').ref;
    let queryRef = collRef;
    queryRef.get().then((snapShot) => {
        for( let dock of snapShot.docs){
          //this.users.push({key: dock.data()['displayName'], 
          //                 value: dock.id});
          this.journ.push(dock.data()['displayName']);
          this.users[dock.data()['displayName']] = [dock.id, dock.data()['branch']];
        }
    });
  }

  showCheckbox(id, data) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Затвердити');

    alert.addInput({
      type: 'checkbox',
      label: 'Загальні',
      value: 'Загальні'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Сайт',
      value: 'Сайт'
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Львівські',
      value: 'Львівські'
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Регіональні',
      value: 'Регіональні'
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Прочитанно',
      value: 'Прочитанно'
    });

    alert.addButton('Відмінити');
    alert.addButton({
      text: 'ОК',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
        this.changePost(id, data);
      }
    });
    alert.present();
  }
  approve(id){
    this.afs.doc('posts/'+id).update({checked_gazeta: false});
    this.afs.doc('posts/'+id).update({checked_lviv: false});
    this.afs.doc('posts/'+id).update({checked_regions: false});
    this.afs.doc('posts/'+id).update({checked_site: false});

    if (this.testCheckboxResult.indexOf("Загальні") > -1){
      this.afs.doc('posts/'+id).update({read: true});
      this.afs.doc('posts/'+id).update({checked_gazeta: true});
      this.afs.doc('posts/'+id).update({gazeta_type: true});
    }

    if (this.testCheckboxResult.indexOf("Львівські") > -1) { 
      this.afs.doc('posts/'+id).update({read: true});
      this.afs.doc('posts/'+id).update({checked_lviv: true});
      this.afs.doc('posts/'+id).update({lviv_type: true});
    }

    if (this.testCheckboxResult.indexOf("Регіональні") > -1) { 
      this.afs.doc('posts/'+id).update({read: true});
      this.afs.doc('posts/'+id).update({checked_regions: true});
      this.afs.doc('posts/'+id).update({regions_type: true});
    }

    if (this.testCheckboxResult.indexOf("Сайт") > -1) { 
      this.afs.doc('posts/'+id).update({read: true});
      this.afs.doc('posts/'+id).update({checked_site: true});
      this.afs.doc('posts/'+id).update({site_type: true});
    }

    if (this.testCheckboxResult.indexOf("Прочитанно") > -1) { 
      this.afs.doc('posts/'+id).update({read: true});
    }
    this.testCheckboxResult = []
  }

  archieve(){
    this.afs.doc('posts/'+this.post.id).update({archieved_gr: true});
  }

  formatTodayDate() {
    var today = new Date();
    let dt = moment(today).format("h:mm, DD/MM/YY");
    return dt
  }

  formatDlnDate() {
    var sbm_dt;
    if (this.deadln != undefined){
      if (this.selected_hour != undefined){
        var arr = this.selected_hour.split(':')
        this.deadln.setHours(arr[0])
        this.deadln.setMinutes(arr[1])
      } else {
        this.deadln.setHours(12)
        this.deadln.setMinutes(0)
      }
      var dt = moment(this.deadln).locale('uk').format("LLL");
      sbm_dt = dt;
    } else {
      if (this.data.deadline == ''){
        sbm_dt ='';
      } else {
        sbm_dt = this.data.deadline;
      }
    }
    return sbm_dt
  }



  checkNascrizna() {
    if (this.added_to_nascrizni != undefined && this.added_to_nascrizni != [] && this.added_to_nascrizni.length != 0){
      var i;
      var newstring = ''
      for (i = 0; i < this.added_to_nascrizni.length; i++) { 
          newstring = newstring +  " " + this.added_to_nascrizni[i];
      }
      this.to_nascrizni = newstring;
      this.content = "(НАСКРІЗНА) " + this.post.data.content;
    } else {
      this.content = this.post.data.content;
    }
  }


  changePost(postid, data){
    this.checkNascrizna();
    this.afs.doc('posts/'+postid).update({to_nascrizni: this.to_nascrizni});
    this.afs.doc('posts/'+postid).update({content: this.content});

    var sbm_dt = this.formatDlnDate();
    this.afs.doc('posts/'+postid).update({deadline: sbm_dt});

    if (this.priority_selected != ''){
      this.priority = this.priority_selected;
      this.afs.doc('posts/'+postid).update({priority: this.priority});
    }

    if (this.selected != undefined &&  this.selected != ''){
      this.afs.doc('posts/'+postid).update({author: this.users[this.selected][0]});
      this.afs.doc('posts/'+postid).update({branch: this.users[this.selected][1]});
      this.afs.doc('posts/'+postid).update({name: this.selected});
    }

    if (this.comm != undefined &&  this.comm != ''){
      this.afs.doc('posts/'+postid).update({comments: this.data.comments + " (ГОЛОВНИЙ РЕДАКТОР): " + this.comm});
      var modified_dt = this.formatTodayDate();
      this.afs.doc('posts/'+postid).update({date_modified: modified_dt});
    }
    this.approve(postid);
    this.navCtrl.pop()
  }





}

