import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FormControl, Validators } from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
import { ResetPage } from '../../pages/reset/reset'
import { SignUpPage } from '../../pages/sign-up/sign-up'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usercreds = {
    email: '',
    password: ''
  }
  constructor(public navCtrl: NavController, private auth: AuthProvider) {

  }
  emailFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
    ]);
  
    passwordFormControl: FormControl = new FormControl('', [
      Validators.required
    ]);

    login() {
      let response = this.auth.login(this.usercreds);   
      response.catch((err) => {
        if (err.code == 'auth/user-not-found')
          console.log('User not found');
        if (err.code == 'auth/wrong-password')
          console.log('Wrong password');
      })
    }
  
    signup() {
      this.navCtrl.push(SignUpPage);
    }
    reset(){
      this.navCtrl.push(ResetPage);
    }
}
