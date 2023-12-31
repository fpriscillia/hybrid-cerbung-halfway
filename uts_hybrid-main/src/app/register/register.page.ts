import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  pictureUrl: string = ""
  password: string = ""
  confirmPwd: string = ""

  constructor(private userService: UserserviceService, private route:Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  register(){
    if(this.password==this.confirmPwd){
      this.userService.newAccount(this.username, this.pictureUrl, this.password)
      this.username=""
      this.pictureUrl=""
      this.password=""
      this.confirmPwd=""

      this.route.navigate(["/signin"])
    }
    else {
      this.presentAlert()
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Register Failed',
      message: 'Password confirmation not valid. Please try again.',
      buttons: ['OK']
    });
  
    await alert.present();
  }
}
