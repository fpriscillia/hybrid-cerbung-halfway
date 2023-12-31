import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  // buat array users
  private users = [
    { username: 'bisayuk', photoUrl: 'https://i.pinimg.com/236x/ea/c0/1b/eac01b2c5c24be4b0516bb9b7fce65d4.jpg', password: 'hmp' },
    { username: 'uts_hmp', photoUrl: 'https://www.bridgetech.co.id/storage/2017/09/android-logo.png', password: 'hmppastia' },
  ];

  isLoggedIn:Boolean = false

  userlogin = {
    username: "",
    photoUrl: "",
    password: "",
  }

  constructor() { }

  // method untuk bagian login
  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.userlogin= {
        username: user.username,
        photoUrl: user.photoUrl,
        password: user.password
      }
      return true
    }
    return false
  }

  //method untuk bagian register
  newAccount(p_username: string, p_urlPhoto: string, p_password: string){
    this.users.push({
      username: p_username, 
      photoUrl: p_urlPhoto, 
      password: p_password
    })
  }

  mostLikeds = [
    {
      url: "https://i.pravatar.cc/400?img=60",
      name: "NebulaNomad",
      since: "2023",
      likes: "171"
    },
    {
      url: "https://i.pravatar.cc/400?img=43",
      name: "AuroraHarmonix",
      since: "2023",
      likes: "141"
    },
    {
      url: "https://i.pravatar.cc/400?img=53",
      name: "SolsticeDreamer",
      since: "2022",
      likes: "98"
    },
    {
      url: "https://i.pravatar.cc/400?img=12",
      name: "TechnoWhizKid",
      since: "2021",
      likes: "56"
    },
  ];

  followings = [
    {
      url: "https://i.pravatar.cc/400?img=43",
      name: "AuroraHarmonix",
      since: "2023",
      latest: "09/09/2023",
      likes: "141",
      created: "3"
    },
    {
      url: "https://i.pravatar.cc/400?img=53",
      name: "SolsticeDreamer",
      since: "2022",
      latest: "03/09/2023",
      likes: "98",
      created: "2"
    },
  ];

  followingcerbungs = [
    {
      url: "https://www.gamespew.com/wp-content/uploads/2016/04/Mobile-Gaming-1-min-1068x712.jpg",
      title: "Gara-Gara Autocorrect",
      update: "01/09/2023",
      like: "10",
    },
    {
      url: "https://biaya.info/wp-content/uploads/2020/11/image-678x381.jpg",
      title: "Dokter Komedian",
      update: "13/05/2023",
      like: "6",
    },
  ];
}
