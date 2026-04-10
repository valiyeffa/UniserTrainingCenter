import { Component } from '@angular/core';
import { ICONS } from '../../../constants/icons';

@Component({
  selector: 'app-home-second-section',
  imports: [],
  templateUrl: './home-second-section.html',
  styleUrl: './home-second-section.scss',
})
export class HomeSecondSection {
  data =[
    {
      img:ICONS.homePageImages.secondSectionIcons.libraryIcon,
      title:'Kitabxana',
    },
    {
      img:ICONS.homePageImages.secondSectionIcons.carierIcon,
      title:'Karyera və məşğulluq',
    },
    {
      img:ICONS.homePageImages.secondSectionIcons.examIcon,
      title:'Onlayn imtahan',
    },
    {
      img:ICONS.homePageImages.secondSectionIcons.apelyasiyaIcon,
      title:'Onlayn appellyasiya',
    },
    {
      img:ICONS.homePageImages.secondSectionIcons.metodicPersonIcon,
      title:'Elmi - Metodiki Şura',
    },
    {
      img:ICONS.homePageImages.secondSectionIcons.volunterIcon,
      title:'Könüllü',
    },
  ];

  
}
