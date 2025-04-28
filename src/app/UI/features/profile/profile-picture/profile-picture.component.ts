import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImagesInterface } from '../../../../smart/data-access/models/images.model';

@Component({
  selector: 'app-profile-picture',
  imports: [CommonModule],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.scss',
})
export class ProfilePictureComponent {
  @Input() profileImg!: ImagesInterface[];
}
