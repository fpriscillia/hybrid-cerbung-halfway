import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(private bantu:AppComponent, private userService: UserserviceService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  login(){
    const {username, password} = this
    const success = this.userService.login(username, password)
    if (success){
      this.bantu.onLoginSuccess()
      this.router.navigate(['/home'])
  }
    else{
      this.presentAlert()
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      message: 'Username or password is not valid. Please try again.',
      buttons: ['OK']
    });
  
    await alert.present();
  }
}
