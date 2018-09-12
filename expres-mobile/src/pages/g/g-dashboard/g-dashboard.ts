import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { GNewPage } from '../g-new/g-new';
import { GArchievePage}  from '../g-archieve/g-archieve';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

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

@IonicPage()
@Component({
  selector: 'page-g-dashboard',
  templateUrl: 'g-dashboard.html',
})
export class GDashboardPage {
  posts: any;
  media_posts: any;
  postsColGaz: AngularFirestoreCollection<Post>;
  postsColMed: AngularFirestoreCollection<Post>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore) {
  }

  ionViewDidLoad() {
    this.posts = this.getPosts();
    this.media_posts = this.getMediaPosts();
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
     }).map(posts => posts.filter(post => (post.data.checked_gazeta || post.data.checked_site || post.data.checked_lviv || post.data.checked_regions) && !(post.data.mediaplan_gazeta || post.data.mediaplan_lviv || post.data.mediaplan_site || post.data.mediaplan_regions) && (!post.data.archieved_g)));
     this.posts = this.posts
     .map((data) => {
         data.sort((a, b) => {
             return a.data.date > b.data.date ? -1 : 1;
          });
         return data;
      });
      return this.posts
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
     }).map(media_posts => media_posts.filter(media_posts => (media_posts.data.read) && (media_posts.data.checked_gazeta || media_posts.data.checked_site || media_posts.data.checked_lviv || media_posts.data.checked_regions) && (media_posts.data.mediaplan_gazeta || media_posts.data.mediaplan_lviv || media_posts.data.mediaplan_site || media_posts.data.mediaplan_regions) && (!media_posts.data.archieved_g)));
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

  /*site(){
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
  }*/

}
