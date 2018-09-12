import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { GrShowPage } from '../gr-show/gr-show'
import { GrNewPage } from '../gr-new/gr-new'
import { GrSitePage } from '../gr-site/gr-site'
import { GrLvivPage } from '../gr-lviv/gr-lviv'
import { GrRegionsPage } from '../gr-regions/gr-regions'
import { GrArchievePage } from '../gr-archieve/gr-archieve'

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
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
  date_modified: any;
}
interface PostId extends Post { 
  id: string; 
}
//to get data from database

@IonicPage()
@Component({
  selector: 'page-gr-dashboard',
  templateUrl: 'gr-dashboard.html',
})
export class GrDashboardPage {
  postsColGaz: AngularFirestoreCollection<Post>;
  postsColSite: AngularFirestoreCollection<Post>;
  postsColLviv: AngularFirestoreCollection<Post>;
  postsColRegions: AngularFirestoreCollection<Post>;
  postsColApp: AngularFirestoreCollection<Post>;
  postDoc: AngularFirestoreDocument<Post>;

  searchControl: FormControl;
  // needed to show post data
  content:string;
  author: string;
  
  //all posts of neede type
  
  posts: any;
  sites: any;
  lviv: any;
  regions: any;
  app: any;
  br: any;
  notFiltered: any;

  postsData = new MatTableDataSource(this.posts);
  sitesData = new MatTableDataSource(this.sites);
  lvivData = new MatTableDataSource(this.lviv);
  regionsData = new MatTableDataSource(this.regions);
  appData = new MatTableDataSource(this.app);
  searchTerm: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore) {

  }

  ionViewDidLoad() {
    this.posts = this.getPosts();
  }
  getPosts(){
    this.postsColGaz = this.afs.collection('posts');
    this.posts = this.postsColGaz.snapshotChanges()
     .map(actions => {
       return actions.map(a => {
         const data = a.payload.doc.data() as Post;
         const id = a.payload.doc.id;
         return { id, data };
       });
     }).map(posts => posts.filter(post => post.data.gazeta_type && !post.data.archieved_gr));
     this.posts = this.posts
     .map((data) => {
         data.sort((a, b) => {
             return a.data.date > b.data.date ? -1 : 1;
          });
         return data;
      });
      return this.posts
  }

  filterItems(searchTerm){
      return this.posts.map((data) => {
        return data.filter((item) => {
          return item.data.content.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.data.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });  
     });
  }
  
  setFilteredItems() {
    this.posts = this.getPosts();
    this.posts =  this.filterItems(this.searchTerm);
  }


  create(){
    this.navCtrl.push(GrNewPage);
  }

  show(post){
    this.afs.doc('posts/'+post.id).update({read: true});
    this.navCtrl.push(GrShowPage,
        {param: post});
  }

  site(){
    this.navCtrl.push(GrSitePage);
  }

  lviv_page(){
    this.navCtrl.push(GrLvivPage);
  }

  regions_page(){
    this.navCtrl.push(GrRegionsPage);
  }
  
  archieve_page(){
    this.navCtrl.push(GrArchievePage)
  }
}
