import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs/Rx';
import * as firebase from 'firebase';
import { NavController, App } from 'ionic-angular';
import { ResetPage } from '../../pages/reset/reset'
import { HomePage } from '../../pages/home/home'
import { GrDashboardPage } from '../../pages/gr/gr-dashboard/gr-dashboard'
import { GDashboardPage } from '../../pages/g/g-dashboard/g-dashboard'
import { SoloDashboardPage } from '../../pages/solo/solo-dashboard/solo-dashboard'
import { SiteDashboardPage } from '../../pages/or-site/site-dashboard/site-dashboard'
import { GazetaDashboardPage } from '../../pages/or_gazeta/gazeta-dashboard/gazeta-dashboard'
import { KvDashboardPage } from '../../pages/kv/kv-dashboard/kv-dashboard'
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  private authState: any;
  private navCtrl:NavController;
  twitterUser = new BehaviorSubject<boolean>(false);
  constructor(public http: HttpClient, private afauth: AngularFireAuth, private afs: AngularFirestore,
    private app:App) {
      this.navCtrl = app.getActiveNav();
      console.log('Hello AuthProvider Provider');
      this.afauth.authState.subscribe((user) => {
        this.authState = user;
      })
  }
  //check Auth
  authUser(): boolean {  
    return this.authState !== null && this.authState !== undefined ? true : false;
  }

  //return details of signed In user
  currentUserDetails(): firebase.User {
    return this.afauth.auth.currentUser;
  }
  
  get currentUserId(): string {
    return this.authState !== null ? this.authState.uid : '';
  }
  
  //Signup
  signUp(usercreds) {
    return this.afauth.auth.createUserWithEmailAndPassword(usercreds.email,
      usercreds.password).then((user) => {
        this.authState = user;
        this.afauth.auth.currentUser.updateProfile({
          displayName: usercreds.displayName,
          photoURL: ''
        }).then(() => {
          this.setUserData(usercreds.email, usercreds.displayName, usercreds.posada, usercreds.branch);
        })
      })
  }
  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }

  //set user data to a local users collections.
  setUserData(email: string, displayName: string, posada: string, branch: string) {
    const path = `users/${this.currentUserId}`;
    const statuspath = `status/${this.currentUserId}`;
    const userdoc = this.afs.doc(path);
    const status = this.afs.doc(statuspath);
    userdoc.set({
      email: email,
      displayName: displayName,
      branch: branch,
      posada: posada
    });
    status.set({
      email: email,
      status: 'online'
    });
    let collRef = this.afs.collection('users').ref;
    let queryRef = collRef.where('email', '==',  this.afauth.auth.currentUser.email);
    queryRef.get().then((snapShot) => {
    var posada = snapShot.docs[0].data()['posada']
    console.log(posada)
    if (posada == 'Журналіст') {
      this.navCtrl.push(GDashboardPage);
    }
    if (posada == 'Оперативний Редактор - Газета') {
      this.navCtrl.push(GazetaDashboardPage);
    }
    if (posada == 'Оперативний редактор - Сайт') {
      this.navCtrl.push(SiteDashboardPage);
    }
    if (posada == 'Керівник відділу') {
      this.navCtrl.push(KvDashboardPage);
    }
    if (posada == 'Головний редактор') {
      this.navCtrl.push(GrDashboardPage);
    }
    if (posada == 'Самостійний') {
      this.navCtrl.push(SoloDashboardPage);
    }
  })
  }

  //Google Login Update
  googleUserData(email: string, displayName: string, photoURL: string) {
    // let docRef = this.afs.collection('users/' + this.afauth.auth.currentUser.uid).ref;
    // if (docRef != undefined) {
      this.afs.doc('users/' + this.afauth.auth.currentUser.uid).set({
        email: email,
        displayName: displayName,
        photoURL: photoURL
      }).then(() => {
        this.afs.doc('status/' + this.afauth.auth.currentUser.uid).set({
          email: email,
          status: 'offline'
        })
      })
    // }
    // else {
    //   this.afs.doc('users/' + this.afauth.auth.currentUser.uid).set({
    //     email: email,
    //     displayName: displayName,
    //     photoURL: photoURL
    //   }).then(() => {
    //     this.afs.doc('status/' + this.afauth.auth.currentUser.uid).set({
    //       email: email,
    //       status: 'offline'
    //     })
    //   })
    // }
    let collRef = this.afs.collection('users').ref;
    let queryRef = collRef.where('email', '==',  this.afauth.auth.currentUser.email);
    queryRef.get().then((snapShot) => {
    var posada = snapShot.docs[0].data()['posada']
    console.log(posada)
    if (posada == 'Журналіст') {
      this.navCtrl.push(GDashboardPage);
    }
    if (posada == 'Оперативний Редактор - Газета') {
      this.navCtrl.push(GazetaDashboardPage);
    }
    if (posada == 'Оперативний редактор - Сайт') {
      this.navCtrl.push(SiteDashboardPage);
    }
    if (posada == 'Керівник відділу') {
      this.navCtrl.push(KvDashboardPage);
    }
    if (posada == 'Головний редактор') {
      this.navCtrl.push(GrDashboardPage);
    }
    if (posada == 'Самостійний') {
      this.navCtrl.push(SoloDashboardPage);
    }
  })
  }

  //Login function
  login(usercreds) {
    return this.afauth.auth.signInWithEmailAndPassword(usercreds.email,
      usercreds.password).then((user) => {
        this.authState = user;
        const status = 'online';
        this.setUserStatus(status);
        let collRef = this.afs.collection('users').ref;
        let queryRef = collRef.where('email', '==',  this.afauth.auth.currentUser.email);
        queryRef.get().then((snapShot) => {
        var posada = snapShot.docs[0].data()['posada']
        console.log(posada)
        if (posada == 'Журналіст') {
          this.navCtrl.push(GDashboardPage);
        }
        if (posada == 'Оперативний Редактор - Газета') {
          this.navCtrl.push(GazetaDashboardPage);
        }
        if (posada == 'Оперативний редактор - Сайт') {
          this.navCtrl.push(SiteDashboardPage);
        }
        if (posada == 'Керівник відділу') {
          this.navCtrl.push(KvDashboardPage);
        }
        if (posada == 'Головний редактор') {
          this.navCtrl.push(GrDashboardPage);
        }
        if (posada == 'Самостійний') {
          this.navCtrl.push(SoloDashboardPage);
        }
      })
      })
  }

  //Sets the user status to online/offline  
  setUserStatus(status) {
    const statuscollection = this.afs.doc(`status/${this.currentUserId}`);
    const data = {
      status: status
    }
    statuscollection.update(data).catch((error) => {
      console.log(error);
    })
  }

    //Logout function
    logout() {
      this.setUserStatus('offline');
      this.afauth.auth.signOut().then(() => {
        this.navCtrl.push(HomePage);
        // window.location.reload();
      })
        .catch((err) => {
        console.log(err);
      })
    }
    

  twitterLogin(usercreds) {
    this.afauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((user) => {
      this.googleUserData(this.afauth.auth.currentUser.email, this.afauth.auth
        .currentUser.displayName, this.afauth.auth.currentUser.photoURL);
      console.log(this.afauth.auth.currentUser);
      this.twitterUser.next(true);
    })
  }
}





