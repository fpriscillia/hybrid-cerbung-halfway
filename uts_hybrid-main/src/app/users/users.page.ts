import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  index=0
  jenistampilan = "most"

  mostLikeds:any[]=[]
  followings:any[]=[]

  constructor(private userService:UserserviceService) { }

  ngOnInit() {
    this.mostLikeds=this.userService.mostLikeds
    this.followings=this.userService.followings
  }

}
