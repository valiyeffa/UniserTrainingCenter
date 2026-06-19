import { Component } from '@angular/core';
import { ICONS } from '../../../constants/icons';

@Component({
  selector: 'app-about-section',
  imports: [],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSection {
  aboutImg = ICONS.homePageImages.aboutSect;

}
