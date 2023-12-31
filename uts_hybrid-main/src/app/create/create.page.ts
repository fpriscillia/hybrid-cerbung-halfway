import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  new_id = 0
  new_title = ""
  new_desc = ""
  new_url = ""
  new_genre = ""
  arr_genre:string[] = []

  constructor(private userservice:UserserviceService, private cerbungservice:CerbungserviceService, private route:Router) { }

  ngOnInit() {
    this.arr_genre = ["Mystery", "Drama", "Comedy", "Action", "Horror", "Romance", "Fantasy"]
    this.new_id = this.cerbungservice.cerbungs.length + 1
  }

  inputData() {
    this.cerbungservice.new_cerbung = {
      id: this.new_id,
      title: this.new_title,
      creator: this.userservice.userlogin.username,
      genre: this.new_genre,
      access: "",
      description: this.new_desc,
      url: this.new_url,
    }
    this.cerbungservice.new_paragraph.idcerbung = this.new_id
    this.cerbungservice.new_paragraph.writer = this.userservice.userlogin.username

    this.route.navigate(['\create2'])
  }
}
