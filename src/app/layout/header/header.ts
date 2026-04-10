import { Component } from '@angular/core';
import { ICONS, Logo } from '../../constants/icons';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  logo = Logo;
  user = true;
  telIcon = ICONS.headerIcons.telIcon;
  smsIcon = ICONS.headerIcons.smsIcon;
  specIcon = ICONS.headerIcons.specIcon;

  navbarItems = [
    {
      link: 'home',
      name: 'Ana səhifə'
    },
    {
      link: 'about-us',
      name: 'Haqqımızda'
    },
    {
      link: 'victory-olimpics',
      name: 'Zəfər Olimpiadası'
    },
    {
      link: 'media',
      name: 'Media'
    },
    {
      link: 'projects',
      name: 'Layihələr'
    },
    {
      link: 'kommision-experts',
      name: 'Komissiya və Ekspert üzv'
    },
    {
      link: 'library',
      name: 'Kitabxana'
    },
    {
      link: 'education-center',
      name: 'Təlim mərkəzi'
    },
  ]

}
