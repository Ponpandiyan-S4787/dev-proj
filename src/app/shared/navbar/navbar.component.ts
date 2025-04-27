import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  activatedNavLink: string = 'home';
  onClickedNavLink(link: string) {
    this.activatedNavLink = link;
  }
}
