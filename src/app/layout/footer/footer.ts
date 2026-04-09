import { Component } from '@angular/core';
import { ICONS, LogoDark } from '../../constants/icons';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  logo = LogoDark;
  telIcon = ICONS.headerIcons.telIcon;
  smsIcon = ICONS.headerIcons.smsIcon;
  locIcon = ICONS.footerIcons.locIcon;

  instIcon = ICONS.footerIcons.instagramIcon;
  facebookIcon = ICONS.footerIcons.facebookIcon;

  fastLinks = [
    {
      link: 'about',
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