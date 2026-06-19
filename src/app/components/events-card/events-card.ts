import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ICONS } from '../../constants/icons';

@Component({
  selector: 'app-events-card',
  imports: [CommonModule],
  templateUrl: './events-card.html',
  styleUrl: './events-card.scss',
})
export class EventsCard {
  // @Input() item: any;
  calendar = ICONS.homePageImages.eventsCard.calendarIcon;
  clock = ICONS.homePageImages.eventsCard.clockIcon;
  location = ICONS.homePageImages.eventsCard.locationIcon;

}
