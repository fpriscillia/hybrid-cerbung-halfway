import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  isLoggedIn:Boolean = false

  constructor(private userService:UserserviceService) {}

  ngOnInit() {
    this.isLoggedIn = this.userService.isLoggedIn
  }

  onLoginSuccess() {
    this.isLoggedIn = true
  }
}