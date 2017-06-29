import { Component } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import{AngularFireAuth } from 'angularfire2/auth';
import{Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msgSend:string = '';
  user:Observable<firebase.User>;
items: FirebaseListObservable<any[]>;
  constructor(public db: AngularFireDatabase, public autht: AngularFireAuth){
this.items = db.list('/messages');
this.user = autht.authState;
console.log(this.user);

  }
  login(){

  	this.autht.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout(){
  	this.autht.auth.signOut();
  }
  sender(){

  	this.items.push({ message: this.msgSend});
  	this.msgSend="";
  }
}
