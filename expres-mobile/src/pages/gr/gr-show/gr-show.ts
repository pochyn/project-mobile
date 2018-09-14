import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FormControl, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as moment from 'moment';
/**
 * Generated class for the GrShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
  date_modified: any;
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
  /**postsColGaz: AngularFirestoreCollection<Post>;

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

  postDoc: AngularFirestoreDocument<Post>;
  id: any;
  
  post: any;
  data: any;
  selected_types: any;
  deadln: any;
  comm: any;
  users = {};
  types = ['Газета', 'Сайт', 'Львів', 'Регіони'];
  hours = ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
  selected: any;
  selected_hour: any;
  journ = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrShowPage');
    this.post = this.navParams.get('param'); 
    this.data = this.post.data;
    console.log(this.data.content);

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

  getTypes(arr){

    if(arr.indexOf("Газета") > -1){
      this.gazeta_type = true;
      this.checked_gazeta = this.post.data['checked_gazeta']
    } else {
      this.gazeta_type = false;
      this.checked_gazeta = false;
    }
    if(arr.indexOf("Сайт") > -1){
      this.site_type = true;
      this.checked_site = this.post.data['checked_site']
    } else {
      this.site_type = false;
      this.checked_site = false;
    }
    if(arr.indexOf("Львів") > -1){
      this.lviv_type = true;
      this.checked_lviv = this.post.data['checked_lviv']
    } else {
      this.lviv_type = false;
      this.checked_lviv = false;
    }
    if(arr.indexOf("Регіони") > -1){
      this.regions_type = true;
      this.checked_regions = this.post.data['checked_regions']
    } else {
      this.regions_type = false;
      this.checked_regions = false;
    }
}

getPost(postId) {
  this.postDoc = this.afs.doc('posts/'+postId);
  this.post = this.postDoc.valueChanges();
}
changePost(){

  var postid = this.post.id;
  var sbm_dt;
  var options = {  
    year: "numeric", month: "numeric",  
    day: "numeric" , hour: "2-digit", minute: "2-digit" 
  };  
  console.log(this.deadln);
  if (this.deadln != undefined){
      sbm_dt = this.deadln;
      this.afs.doc('posts/'+postid).update({deadline: sbm_dt});
  } 
  if (this.selected_types != undefined &&  this.selected_types != ''){
    this.getTypes(this.selected_types);
    this.afs.doc('posts/'+postid).update({gazeta_type: this.gazeta_type});
    this.afs.doc('posts/'+postid).update({site_type: this.site_type});
    this.afs.doc('posts/'+postid).update({lviv_type: this.lviv_type});
    this.afs.doc('posts/'+postid).update({regions_type: this.regions_type});
    this.afs.doc('posts/'+postid).update({checked_gazeta: this.checked_gazeta});
    this.afs.doc('posts/'+postid).update({checked_site: this.checked_site});
    this.afs.doc('posts/'+postid).update({checked_lviv: this.checked_lviv});
    this.afs.doc('posts/'+postid).update({checked_regions: this.checked_regions});
  }

  if (this.selected != undefined &&  this.selected != ''){
    this.afs.doc('posts/'+postid).update({author: this.users[this.selected][0]});
    this.afs.doc('posts/'+postid).update({branch: this.users[this.selected][1]});
    this.afs.doc('posts/'+postid).update({name: this.selected});
  }

  if (this.comm != undefined &&  this.comm != ''){
    this.afs.doc('posts/'+postid).update({comments: this.post.data['comments'] + this.comm});
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    today.setHours(hour);
    today.setMinutes(min);
    var options = {  
      year: "numeric", month: "numeric",  
      day: "numeric", hour: "2-digit", minute: "2-digit"  
    };  
    var modified_dt = today.toLocaleTimeString("en-us", options);
    this.afs.doc('posts/'+postid).update({date_modified: modified_dt});

  }
}

archieve(postid){
  this.afs.doc('posts/'+postid).update({archieved_gr: true});
}

approve_gazeta(postid, check){
  if (check) {
    var element11 = document.getElementById("1");
    this.afs.doc('posts/'+postid).update({checked_gazeta: false});
    element11.classList.remove("rej");
    element11.classList.add("approve");
  } 
  if (!check){
    var element12 = document.getElementById("1");
    this.afs.doc('posts/'+postid).update({checked_gazeta: true});
    element12.classList.remove("approve");
    element12.classList.add("rej");
  }
}
approve_site(postid, check){
  if (check) {
    this.afs.doc('posts/'+postid).update({checked_site: false});
    var element11 = document.getElementById("2");
    element11.classList.remove("rej");
    element11.classList.add("approve");
  } 
  if (!check){
    this.afs.doc('posts/'+postid).update({checked_site: true});
    var element12 = document.getElementById("2");
    element12.classList.remove("approve");
    element12.classList.add("rej");
  }
}
approve_lviv(postid, check){
  if (check) {
    this.afs.doc('posts/'+postid).update({checked_lviv: false});
    var element11 = document.getElementById("3");
    element11.classList.remove("rej");
    element11.classList.add("approve");
  } 
  if (!check){
    this.afs.doc('posts/'+postid).update({checked_lviv: true});
    var element12 = document.getElementById("3");
    element12.classList.remove("approve");
    element12.classList.add("rej");
  }
}
approve_regions(postid, check){
  if (check) {
    this.afs.doc('posts/'+postid).update({checked_regions: false});
    var element11 = document.getElementById("4");
    element11.classList.remove("rej");
    element11.classList.add("approve");
  } 
  if (!check){
    this.afs.doc('posts/'+postid).update({checked_regions: true});
    var element12 = document.getElementById("4");
    element12.classList.remove("approve");
    element12.classList.add("rej");
  }
}
reject(postid){
  this.afs.doc('posts/'+postid).update({checked_gazeta: false});
  this.afs.doc('posts/'+postid).update({checked_site: false});
  this.afs.doc('posts/'+postid).update({checked_lviv: false});
  this.afs.doc('posts/'+postid).update({checked_regions: false});
}


} **/
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

