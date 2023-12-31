import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-readcerbung',
  templateUrl: './readcerbung.page.html',
  styleUrls: ['./readcerbung.page.scss'],
})
export class ReadcerbungPage implements OnInit {

  index = 0
  id = 0
  new_paragraph = ""
  cerbungs:any[]=[]
  paragraphs:any[]=[]

  constructor(private userservice:UserserviceService, private route:ActivatedRoute, private cerbungservice: CerbungserviceService, private rute:Router) { }

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

  //harus menunggu 
  submitParagraph() {
    this.id = this.index + 1
    this.cerbungservice.addParagraph(this.id, this.new_paragraph, this.userservice.userlogin.username)
    this.new_paragraph = ""

    this.rute.navigate(['/home'])
  }
}
