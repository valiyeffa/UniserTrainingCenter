import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-component',
  imports: [RouterOutlet, Footer, Header],
  templateUrl: './layout-component.html',
  styles: ``,
})
export class LayoutComponent {

}
