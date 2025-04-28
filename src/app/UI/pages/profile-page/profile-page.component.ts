import { Component, Input } from '@angular/core';
import { ProfileHeaderComponent } from '../../features/profile/profile-header/profile-header.component';
import { ProfileBodyComponent } from '../../features/profile/profile-body/profile-body.component';
import { ProfileFooterComponent } from '../../features/profile/profile-footer/profile-footer.component';
import { ProfilePictureComponent } from '../../features/profile/profile-picture/profile-picture.component';
import { ImagesInterface } from '../../../smart/data-access/models/images.model';

@Component({
  selector: 'app-profile-page',
  imports: [
    ProfilePictureComponent,
    ProfileHeaderComponent,
    ProfileBodyComponent,
    ProfileFooterComponent,
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  @Input() profileImg!: ImagesInterface[];
}
