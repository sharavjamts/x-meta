import { Component } from '@angular/core';


import SwiperCore, { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'X-Meta-г сонгосны давуу тал';

  value = 5;
  isViewMore = false;
  showList(){
    this.isViewMore = !this.isViewMore;
  }

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    autoplay: true,  
  };

  list = [
    {
      iconPath: '../assets/IHC_Icon.png',
      shortName: 'IHC',
      name: 'Inflation Hedging Coin',
      last_price: '₮ 1.6131',
      change: '-12.65',
      markets: 'market1',
    },
    {
      iconPath: '../assets/BTC.png',
      shortName: 'BTC',
      name: 'Bitcoin',
      last_price: '₮ 10.731413',
      change: '+40',
      markets: 'market2',
    },
    {
      iconPath: '../assets/ETH.png',
      shortName: 'ETH',
      name: 'Etherium',
      last_price: '₮ 122.7',
      change: '+25',
      markets: 'market2',
    },
    {
      iconPath: '../assets/sol.jpg',
      shortName: 'SOL',
      name: 'Solona',
      last_price: '₮ 134.8',
      change: '-12.67',
      markets: 'market3',
    },
    {
      iconPath: '../assets/ada.png',
      shortName: 'ADA',
      name: 'Cordnona',
      last_price: '₮ 12.94323',
      change: '+20',
      markets: 'market4',
    },
    {
      iconPath: '../assets/XRP.png',
      shortName: 'XRP',
      name: 'Ripple',
      last_price: '₮ 2.32233',
      change: '-5',
      markets: 'market5',
    },
    {
      iconPath: '../assets/matic.png',
      shortName: 'MATIC',
      name: 'Polygon',
      last_price: '₮ 1.633',
      change: '+1',
      markets: 'market1',
    },
    {
      iconPath: '../assets/luna1.png',
      shortName: 'LUNA',
      name: 'Terra',
      last_price: '₮ 33.7',
      change: '+10',
      markets: 'market2',
    },
  ];

  boxes = [
    {
      icon: '../assets/1.png',
      choice: 'Тусламж',
      description:
        'Aсуудал гарвал бидэнтэй шууд холбогдоорой. Tанд туслахад үргэлж бэлэн!',
    },
    {
      icon: '../assets/2.png',
      choice: 'Мэдээ',
      description: 'Биржийн мэдээлэл солилцох платформ',
    },
    {
      icon: '../assets/3.png',
      choice: 'Комюнити',
      description: 'Хэлэлцүүлэгт нэгдэж мэдээллийг цаг тухайд нь аваарай!',
    },
  ];

  imgPaths = [
    { path: '../assets/ihc.png' },
    { path: '../assets/shib.png' },
    { path: '../assets/luna.png' },
    { path: '../assets/matic1.png' },
    { path: '../assets/shib.png' },
    { path: '../assets/matic1.png' },
  ];
}
