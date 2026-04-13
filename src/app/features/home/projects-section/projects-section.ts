import { Component } from '@angular/core';
import { ProjectCard } from "../../../components/project-card/project-card";

@Component({
  selector: 'app-projects-section',
  imports: [ProjectCard],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  projDatas: any = [
    {
      image: 'images/projectsImage/proj1.png',
      title: 'Sabah qrupları layihələrinə yenidən start verilir.',
      text: 'Niyə SABAH? Sürətlə inkişaf edən iqtisadiyyatda en gucludur.'
    },
    {
      image: 'images/projectsImage/proj2.png',
      title: '“Erasmus” mübadilə proqramı ilə start verilib',
      text: 'Erasmus Nədir? Erasmus təhsil, təlim və gucde en gucludur.'
    },
    {
      image: 'images/projectsImage/proj3.png',
      title: 'Sabah qrupları layihəsi',
      text: 'Niyə SABAH? Sürətlə inkişaf edən iqtisadiyyatda en gucludur.'
    },
    {
      image: 'images/projectsImage/proj4.png',
      title: '“Erasmus” mübadilə proqramı ilə start verilib',
      text: 'Erasmus Nədir? Erasmus təhsil, təlim və gucde en gucludur.'
    },
  ]
}
