import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-events-card',
  imports: [CommonModule],
  templateUrl: './events-card.html',
  styleUrl: './events-card.scss',
})
export class EventsCard {
  @Input() item: any;
}
