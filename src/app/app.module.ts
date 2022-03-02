import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import  { FlexLayoutModule } from '@angular/flex-layout';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CardComponent,
    ListComponent,
    FooterComponent,
    SectionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SlickCarouselModule,
    SwiperModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
