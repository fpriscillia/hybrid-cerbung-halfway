import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cerbungs:any[]=[]
  access = ""

  constructor(private cerbungservice: CerbungserviceService, private route:Router) {}

  ngOnInit() {
    this.cerbungs = this.cerbungservice.cerbungs
  }

  readCerbung(i:number) {
    this.access = this.cerbungs[i].access
    if (this.access === "Public") {
      this.route.navigate(['/readcerbung/' + i])
    }
    else {
      this.route.navigate(['/readrestricted/' + i])
    }
  }
}
