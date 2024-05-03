import { ChatComponent } from './components/chat/chat.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ListInvitComponent } from './components/invitations/list-invit/list-invit.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ProfileUserComponent } from './profile/profile-user/profile-user.component';
import { authGuard } from './components/authentication/service/auth.guard';
import { CreatePublicationComponent } from './profile/publication/create-publication/create-publication.component';
import { ListPublicationComponent } from './profile/publication/list-publication/list-publication.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: ProfileComponent,
    children: [
      // {path:'',redirectTo:'login',pathMatch:'full'},
      { path: 'profile', component: ProfileUserComponent ,canActivate:[authGuard]},
      {
        path: 'listInvitation',
        component: ListInvitComponent,canActivate:[authGuard]
      },
      {
        path:'createPub',component:CreatePublicationComponent
      },
      {path:'listPub',component:ListPublicationComponent}
    ],
  },
  { path: 'chat', component: ChatComponent },
];
