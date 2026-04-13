import { Component } from '@angular/core';
import { EventsCard } from "../../../components/events-card/events-card";

@Component({
  selector: 'app-events-section',
  imports: [EventsCard],
  templateUrl: './events-section.html',
  styleUrl: './events-section.scss',
})
export class EventsSection {
  eventsData: any = [
    {
      date: '2026-10-31T00:00:00',
      text: 'Uniserdə “TEKNOFEST”in Azərbaycandakı rəsmi nümayəndəliyinin dəstəyi ilə bu il baş tutacaq tedbirde istirak edibler'
    },
    {
      date: '2026-10-12T00:00:00',
      text: '"Almaniyada təqaüdlü təhsil" mövzusunda keçirilən seminarda mövzular müzakirə olundu ve qerara gelindiki'
    },
    {
      date: '2026-10-10T00:00:00',
      text: 'Uniserdə “TEKNOFEST”in Azərbaycandakı rəsmi nümayəndəliyinin dəstəyi ilə bu il baş tutacaq tedbirde istirak edibler'
    },
    {
      date: '2026-10-05T00:00:00',
      text: 'Müəllimlər Gününə həsr olunan tədbir keçirilən tədbirdə həm tələbələr, həm müəllimlər çıxış etdi ve oz bacariqlarini gosterdi'
    },
  ]
}
