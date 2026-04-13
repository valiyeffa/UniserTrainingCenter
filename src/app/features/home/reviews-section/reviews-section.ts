import { Component } from '@angular/core';
import { ICONS } from '../../../constants/icons';

@Component({
  selector: 'app-reviews-section',
  imports: [],
  templateUrl: './reviews-section.html',
  styleUrl: './reviews-section.scss',
})
export class ReviewsSection {
  quotationIcon = ICONS.homePageImages.quotationIcon;
  ellipseIcon = ICONS.homePageImages.ellipseIcon;


}
