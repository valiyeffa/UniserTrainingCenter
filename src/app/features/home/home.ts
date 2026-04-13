import { Component } from '@angular/core';
import { HomeFirstSection } from "./home-first-section/home-first-section";
import { HomeSecondSection } from "./home-second-section/home-second-section";
import { HomeThirdSection } from "./home-third-section/home-third-section";
import { ProjectsSection } from "./projects-section/projects-section";
import { EventsSection } from "./events-section/events-section";
import { ReviewsSection } from "./reviews-section/reviews-section";

@Component({
  selector: 'app-home',
  imports: [HomeFirstSection, HomeSecondSection, HomeThirdSection, ProjectsSection, EventsSection, ReviewsSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
