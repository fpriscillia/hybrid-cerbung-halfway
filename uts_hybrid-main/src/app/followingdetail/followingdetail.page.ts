import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-followingdetail',
  templateUrl: './followingdetail.page.html',
  styleUrls: ['./followingdetail.page.scss'],
})
export class FollowingdetailPage implements OnInit {

  index=0

  followings:any[]=[]
  followingcerbungs:any[]=[]

  constructor(private route: ActivatedRoute, private userservice: UserserviceService) { }

  ngOnInit() {
    this.followings=this.userservice.followings
    this.route.params.subscribe(params => {
      this.index = params['id']; // 'id' should match the route parameter name
      // You can use the 'id' parameter for your logic here
    });
    this.followingcerbungs=this.userservice.followingcerbungs
  }

}