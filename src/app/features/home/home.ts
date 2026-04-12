import { Component } from '@angular/core';
import { HomeFirstSection } from "./home-first-section/home-first-section";
import { HomeSecondSection } from "./home-second-section/home-second-section";
import { HomeThirdSection } from "./home-third-section/home-third-section";

@Component({
  selector: 'app-home',
  imports: [HomeFirstSection, HomeSecondSection, HomeThirdSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
