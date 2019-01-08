import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { GrNewPage } from '../gr-new/gr-new';

import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { GrShowPage } from '../gr-show/gr-show';
import { IonicApp } from 'ionic-angular/index';
import { AuthProvider } from '../../../providers/auth/auth';

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
/**
 * Generated class for the GrApprovedMediaplansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-gr-approved-mediaplans',
  templateUrl: 'gr-approved-mediaplans.html',
})
export class GrApprovedMediaplansPage {

  postsColGaz: AngularFirestoreCollection<Post>;
  postsColSite: AngularFirestoreCollection<Post>;
  postsColLviv: AngularFirestoreCollection<Post>;
  postsColRegions: AngularFirestoreCollection<Post>;
  postsColApp: AngularFirestoreCollection<Post>;
  postDoc: AngularFirestoreDocument<Post>;

  
  // needed to show post data
  content:string;
  author: string;
  
  //all posts of neede type
  
  posts: any;
  sites: any;
  lviv: any;
  regions: any;
  
  br: any;
  notFiltered: any;

  postsData = new MatTableDataSource(this.posts);
  sitesData = new MatTableDataSource(this.sites);
  lvivData = new MatTableDataSource(this.lviv);
  regionsData = new MatTableDataSource(this.regions);

  
  nascriznyy = false;
  nascr_name = '';
  private auth: AuthProvider;
  constructor(private afauth: AngularFireAuth, public app: IonicApp, public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore, injector: Injector) {
    setTimeout(() => this.auth = injector.get(AuthProvider));
  }

  ionViewDidLoad() {
    this.posts = this.getPosts();
  }

  getPosts(){
    let collRef2 = this.afs.collection('users').ref;
    let queryRef2 = collRef2.where('email', '==', this.afauth.auth.currentUser.email);
    queryRef2.get().then((snapShot) => {
        var name = snapShot.docs[0].data()['displayName']
        this.nascr_name = snapShot.docs[0].data()['displayName']

        let collRef1 = this.afs.collection('nascrizni').ref;
        let queryRef1 = collRef1;
        queryRef1.get().then((snapShot) => {
            for( let dock of snapShot.docs){
              if (dock.data()['name'] == name) {
                console.log("tak")
                this.nascriznyy = true;
              }
            }

      this.postsColGaz = this.afs.collection('posts');
      this.posts = this.postsColGaz.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      }).map(posts => posts.filter(post => (post.data.read) && (post.data.checked_gazeta || post.data.checked_lviv || post.data.checked_regions || post.data.checked_site ) && (post.data.mediaplan_gazeta || post.data.mediaplan_lviv  || post.data.mediaplan_regions || post.data.mediaplan_site) && (!post.data.archieved_gr)));       
      this.posts = this.posts
      .map((data) => {
          data.sort((a, b) => {
              return a.data.date > b.data.date ? -1 : 1;
            });
          return data;
          });
        return this.posts
      
        });
    
      })
  }

  show(post){
    this.navCtrl.push(GrShowPage,
        {param: post});
  }
  showMore(post){
    var buttonId = "button-" + post.id + "-10";
    var buttonElement = document.getElementById(buttonId);
    var divId = "div-" + post.id + "-10";
    var divElement = document.getElementById(divId);


    if(buttonElement.textContent == "(більше)"){
      buttonElement.textContent = "(менше)";
      divElement.textContent = post.data.content;
    }else{
      var contentData = post.data.content;
      divElement.textContent = contentData.slice(0, 80);
      buttonElement.textContent = "(більше)";
    }
    
  }

}
