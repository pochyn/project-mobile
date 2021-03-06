import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { GNewPage } from '../g-new/g-new';
import { GArchievePage}  from '../g-archieve/g-archieve';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { GShowPage } from '../g-show/g-show'
import { AllShowMediaPage } from '../../all-show-media/all-show-media'

/**
 * Generated class for the GDashboardPage page.
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


@Component({
  selector: 'page-g-approved-mediaplans',
  templateUrl: 'g-approved-mediaplans.html',
})
export class GApprovedMediaplansPage {

  posts: any;
  media_posts: any;
  postsColGaz: AngularFirestoreCollection<Post>;
  postsColMed: AngularFirestoreCollection<Post>;
  tab2Root = GNewPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore) {
  }

  ionViewDidLoad() {
    this.media_posts = this.getMediaPosts();
  }


  getMediaPosts(){
    this.postsColMed = this.afs.collection('posts');
    this.media_posts = this.postsColMed.snapshotChanges()
     .map(actions => {
       return actions.map(a => {
         const data = a.payload.doc.data() as Post;
         const id = a.payload.doc.id;
         return { id, data };
       });
      }).map(posts => posts.filter(post => (post.data.read) && (post.data.checked_gazeta || post.data.checked_lviv || post.data.checked_regions || post.data.checked_site ) && (post.data.mediaplan_gazeta || post.data.mediaplan_lviv  || post.data.mediaplan_regions || post.data.mediaplan_site) && (!post.data.archieved_g)));
     this.media_posts = this.media_posts
     .map((data) => {
         data.sort((a, b) => {
             return a.data.date > b.data.date ? -1 : 1;
          });
         return data;
      });
      return this.media_posts
  }

  create(){
    this.navCtrl.push(GNewPage);
  }
  show(post){
    this.navCtrl.push(AllShowMediaPage,
        {param: post});
  }

}

