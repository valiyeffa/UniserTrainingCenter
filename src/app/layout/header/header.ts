import { Component } from '@angular/core';
import { ICONS, Logo } from '../../constants/icons';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  logo = Logo;
  telIcon = ICONS.headerIcons.telIcon;
  smsIcon = ICONS.headerIcons.smsIcon;

  
}
