import { Component } from '@angular/core';
import { HeaderProfileComponent } from '../header-profile/header-profile.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderProfileComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
