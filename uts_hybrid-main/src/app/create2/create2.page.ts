import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create2',
  templateUrl: './create2.page.html',
  styleUrls: ['./create2.page.scss'],
})
export class Create2Page implements OnInit {

  public new_access = ""
  new_firstpar = ""

  constructor(private cerbungservice:CerbungserviceService, private route:Router) { }

  ngOnInit() {
  }

  inputData() {
    this.cerbungservice.new_cerbung.access = this.new_access
    this.cerbungservice.new_paragraph.text = this.new_firstpar

    this.route.navigate(['\create3'])
  }
}
