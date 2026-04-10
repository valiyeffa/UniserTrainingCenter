import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ICONS } from '../../../constants/icons';

register();
@Component({
  selector: 'app-home-first-section',
  imports: [],
  templateUrl: './home-first-section.html',
  styleUrl: './home-first-section.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeFirstSection {
  image = ICONS.homePageImages.carouselImage1;

  carouselImages = [
    {
      image: ICONS.homePageImages.carouselImage1
    },
    {
      image: ICONS.homePageImages.carouselImage2
    },
    {
      image: ICONS.homePageImages.carouselImage3
    },
  ]
}
