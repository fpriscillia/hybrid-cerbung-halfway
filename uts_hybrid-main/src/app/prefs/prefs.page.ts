import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prefs',
  templateUrl: './prefs.page.html',
  styleUrls: ['./prefs.page.scss'],
})
export class PrefsPage implements OnInit {

  userLogin = {
    username: "",
    photoUrl: "",
    password: "",
  }
  constructor(private userService:UserserviceService, private route:Router) { }

  ngOnInit() {
    this.userLogin = this.userService.userlogin
  }

  logout() {
    this.route.navigate(['/welcome']);
  }

}
