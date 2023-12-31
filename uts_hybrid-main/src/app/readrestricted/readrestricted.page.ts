import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-readcerbung',
  templateUrl: './readrestricted.page.html',
  styleUrls: ['./readrestricted.page.scss'],
})
export class ReadrestrictedPage implements OnInit {

  index = 0
  id = 0
  new_paragraph = ""
  cerbungs:any[]=[]
  paragraphs:any[]=[]

  constructor(private route:ActivatedRoute, private cerbungservice: CerbungserviceService, private rute:Router) { }

  ngOnInit() {
    this.cerbungs=this.cerbungservice.cerbungs
    this.route.params.subscribe(
      params => {
        this.index = params['index']
      }
    )
    for (let par of this.cerbungservice.paragraphs) {
      if (par.idcerbung == this.cerbungs[this.index].id) {
        this.paragraphs.push(par)
      }
    }
  }
}
