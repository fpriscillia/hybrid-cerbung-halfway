import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create3',
  templateUrl: './create3.page.html',
  styleUrls: ['./create3.page.scss'],
})
export class Create3Page implements OnInit {

  new_cerbung = {
    id: 0,
    title: "",
    creator: "",
    genre: "",
    access: "",
    description: "",
    url: "",
  }
  new_paragraph = {
    idcerbung: 0,
    text: "",
    writer: "",
  }

  constructor(private cerbungservice:CerbungserviceService, private route:Router) { }

  ngOnInit() {
    this.new_cerbung = this.cerbungservice.new_cerbung
    this.new_paragraph = this.cerbungservice.new_paragraph
  }

  submitCerbung() {
    this.cerbungservice.addCerbung(
      this.new_cerbung.title, 
      this.new_cerbung.creator,
      this.new_cerbung.genre,
      this.new_cerbung.access,
      this.new_cerbung.description,
      this.new_cerbung.url
    )
    this.cerbungservice.addParagraph(
      this.new_paragraph.idcerbung,
      this.new_paragraph.text,
      this.new_paragraph.writer
    )

    this.route.navigate(['\home'])
  }
}
