import { Component } from '@angular/core';
import { HeaderProfileComponent } from '../header-profile/header-profile.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderProfileComponent, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
