import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ICONS } from '../../../constants/icons';

@Component({
  selector: 'app-partners-section',
  imports: [],
  templateUrl: './partners-section.html',
  styleUrl: './partners-section.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PartnersSection {
  carouselImages = [
    {
      image: 'images/partnersImg/ADYlogo.png'
    },
    {
      image: 'images/partnersImg/Azərbaycan_Respublikası_Təhsil_Nazirliyinin_loqosu.svg'
    },
    {
      image: 'images/partnersImg/ALlogo.svg'
    },
    {
      image: 'images/partnersImg/foodLogo.png'
    },
    {
      image: 'images/partnersImg/sara_logo.svg'
    },
    
  ]
}
