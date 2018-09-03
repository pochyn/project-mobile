import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FormControl, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var usercreds;

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  usercreds = {
    email: '',
    password: '',
    displayName: '',
    branch: '',
    posada: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
  }
  selected: any;
  types = ['Спорт', 'Світ', "Здоров'я", 'Технології', 'Оперативний редактор', 'Головний редактор'];
  posadas = ['Журналіст', 'Оперативний Редактор - Газета', 'Оперативний редактор - Сайт', 'Керівник відділу', 'Головний редактор']

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  emailFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
  ]);
  passwordFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);
  branchFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);
  posadaFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);
  nameFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  createAccount() {
    console.log(this.usercreds);
    this.auth.signUp(this.usercreds);
  }

  goBack(){
    this.navCtrl.pop();
  }

}
