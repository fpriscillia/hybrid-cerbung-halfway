import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CerbungserviceService {

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

  cerbungs = [
    {
      id: 1,
      title: "Rahasia Terkunci di Perpustakaan Kuno",
      creator: "NebulaNomad",
      genre: "Mistery",
      access: "Public",
      description: "\"Rahasia Terkunci di Perpustakaan Kuno\" mengisahkan tentang seorang mahasiswa bernama Alex yang secara tak sengaja menemukan sebuah buku kuno yang misterius di perpustakaan universitasnya.",
      url: "https://x2e5r7b9.rocketcdn.me/wp-content/uploads/2020/01/0-02-05-4b0d7dda8273424508dad4716802c35361d8ca112023d388f23211e595748d75_1c6d9a38157e40.jpg",
    },
    {
      id: 2,
      title: "Dunia Dalam Cermin: Kisah Terbalik yang Misterius",
      creator: "NebulaNomad",
      genre: "Mistery",
      access: "Restricted",
      description: "Kisah seru tentang seorang anak yang menemukan cermin ajaib di sebuah toko antik. Saat ia melihat ke dalam cermin, ia terseret ke dunia yang seakan terbalik, di mana segalanya.",
      url: "https://c0.wallpaperflare.com/preview/537/888/849/travel-beach-women-sky.jpg",
    },
    {
      id: 3,
      title: "Negeri di Awan",
      creator: "AuroraHarmonix",
      genre: "Fantasy",
      access: "Public",
      description: "Rico menolong seorang anak kecil yang terjatuh di halte. Anak itu mengajaknya pergi ke tempat persembunyiannya jauh di atas gunung untuk melihat rahasia keindahan yang belum pernah ia lihat.",
      url: "https://i0.wp.com/ningjogja.com/jogjaistimewa/wp-content/uploads/2018/01/Bukit-Panguk-Kediwung-wisatayogyakarta.biz-.jpg",
    },
  ];

  paragraphs = [
    {
      idcerbung: 1,
      text: "Pagi itu Alex menikmati waktu di perpustakaan sambil menunggu jam kuliah. Sebenarnya ia bingung ingin membaca buku apa karena di sana hanya ada buku pelajaran.",
      writer: "NebulaNomad",
    },
    {
      idcerbung: 1,
      text: "Tiba-tiba Alex melihat secercah cahaya dari sebuah rak buku di ujung ruangan, cahaya itu berkilau keemasan dan seolah memanggil dirinya.",
      writer: "SolsticeDreamer",
    },
    {
      idcerbung: 1,
      text: "Alex pun menghampiri asal cahaya tersebut yang ternyata merupakan sebuah buku kuno yang agak usang. Setelah melihat judulnya, Alex pun tertarik untuk membaca buku tersebut.",
      writer: "AuroraHarmonix",
    },
    {
      idcerbung: 2,
      text: "Dengan hati berdebar, Alex mengelilingi toko antik tua itu. Matanya tertarik pada cermin kuno yang memancarkan keindahan misterius. Tanpa pikir panjang, ia menyentuh permukaannya, dan dunia seketika terbalik.",
      writer: "NebulaNomad",
    },
    {
      idcerbung: 2,
      text: "Dalam sekejap, Alex merasa seperti melayang dalam ruang waktu yang tak terbatas, dan sekarang, di hadapannya terbentang dunia yang ajaib dan tak dikenal.",
      writer: "SolsticeDreamer",
    },
    {
      idcerbung: 2,
      text: "Di dunia cermin, segalanya tampak sama, tapi seolah ada rahasia yang tersembunyi di balik setiap sudutnya. Alex merasa tak sabar untuk menjelajahinya dan mengungkap misteri di balik cermin ajaib itu.",
      writer: "AuroraHarmonix",
    },
    {
      idcerbung: 3,
      text: "Hari ini Rico merasa serba sial. Pagi tadi motor kesayangannya tiba-tiba mogok sehingga ia harus naik bus untuk pergi ke sekolahnya, alhasil ia pun dihukum guru karena terlambat datang ke sekolah.",
      writer: "NebulaNomad",
    },
    {
      idcerbung: 3,
      text: "Di sekolah ia juga tidak bisa fokus mengerjakan ujian hingga hasil ujiannya buruk. Ia merasa sangat kesal dan memutuskan untuk kabur dari sekolah pada jam istirahat untuk menenangkan pikiran.",
      writer: "SolsticeDreamer",
    },
    {
      idcerbung: 3,
      text: "Tentu saja Rico harus menaiki bus lagi untuk pergi ke tempat lain. Saat menuju ke halte bus, ia melihat seorang anak kecil duduk di sana sambil menangis sendirian.",
      writer: "AuroraHarmonix",
    },
    {
      idcerbung: 3,
      text: "Rico menghibur anak itu hinggu tersenyum kembali, rupanya ia menangis karena lupa membawa uang untuk naik bus. Rico menawarkan bantuan uang, namun anak itu malah mengajaknya pergi ke suatu tempat.",
      writer: "TechnoWhizKid",
    },
  ];

  constructor() { }

  addCerbung(p_title:string, p_creator:string, p_genre:string, p_access:string, p_desc:string, p_url:string) {
    this.cerbungs.push({
      id: this.cerbungs.length + 1,
      title: p_title,
      creator: p_creator,
      genre: p_genre,
      access: p_access,
      description: p_desc,
      url: p_url,
    })
  }

  addParagraph(p_cerbung:number, p_text:string, p_writer:string) {
    this.paragraphs.push({
      idcerbung: p_cerbung,
      text: p_text,
      writer: p_writer,
    })
  }
}
