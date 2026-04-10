import { Component } from '@angular/core';
import { HomeFirstSection } from "./home-first-section/home-first-section";

@Component({
  selector: 'app-home',
  imports: [HomeFirstSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
