import { ChatComponent } from './components/chat/chat.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"profile",component:ProfileComponent},
  {path:"chat",component:ChatComponent}

];
