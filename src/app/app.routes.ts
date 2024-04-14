import { ChatComponent } from './components/chat/chat.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListInvitComponent } from './components/invitations/list-invit/list-invit.component';

export const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"",component:ProfileComponent,children:[
    {
      path:"listInvitation",component:ListInvitComponent
    }
  ]},
  {path:"chat",component:ChatComponent},


];
