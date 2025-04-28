import { Component } from '@angular/core';
import { ProfilePageComponent } from '../../../UI/pages/profile-page/profile-page.component';
import { CommonModule } from '@angular/common';
import { ProfileImage } from '../../data-access/mocks/images.mock';
import { ImagesInterface } from '../../data-access/models/images.model';

@Component({
  selector: 'app-profile',
  imports: [ProfilePageComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  profileImg: ImagesInterface[] = ProfileImage;
}
