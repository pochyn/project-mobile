import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FormControl, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
/**
 * Generated class for the ResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var usercreds;
var email;


@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {
  usercreds = {
    email: '',
    password: ''
  }
  email: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
  }
  emailFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
    ]);
  
    passwordFormControl: FormControl = new FormControl('', [
      Validators.required
    ]);

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPage');
  }
  reset(email){
    this.auth.resetPassword(email);
    this.navCtrl.pop();
  }
  goBack(){
    this.navCtrl.pop();
  }
}