import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  activatedNavLink: string = 'profile';

  constructor(private router: Router) {
    this.router.navigateByUrl('/profile');
  }

  onClickedNavLink(link: string) {
    this.activatedNavLink = link;
  }
}
