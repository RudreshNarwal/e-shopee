import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  
  //user: firebase.User; // firebase.User is user type 
  
  
  constructor(public auth: AuthService) { 
    //afAuth.authState.subscribe(user =>this.user= user) //authState is observable for firebase.user
  }
  
  ngOnInit() {

  }
  
  logout() {
    this.auth.logout()
  }
}
