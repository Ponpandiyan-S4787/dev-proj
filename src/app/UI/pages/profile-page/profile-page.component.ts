import { Component } from '@angular/core';
import { PictureComponent } from '../../features/profile/picture/picture.component';
import { ProfileHeaderComponent } from '../../features/profile/profile-header/profile-header.component';
import { ProfileBodyComponent } from '../../features/profile/profile-body/profile-body.component';
import { ProfileFooterComponent } from '../../features/profile/profile-footer/profile-footer.component';

@Component({
  selector: 'app-profile-page',
  imports: [
    PictureComponent,
    ProfileHeaderComponent,
    ProfileBodyComponent,
    ProfileFooterComponent,
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {}
