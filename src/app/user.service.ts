import { AppUser } from './models/app-user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User){
    // /users/ is location in database and user.uid is unique id
    // we are using update, because it give us power to update values in future
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }

  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);
  }
}
