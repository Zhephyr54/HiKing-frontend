import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import {HomeComponent} from './home/home.component';
import {HikingComponent} from './hiking/hiking.component';
import {EditHikingComponent} from './edit-hiking/edit-hiking.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hiking', component: HikingComponent },
  { path: 'edit/hiking', component: EditHikingComponent},

  // TODO faire un component 404
  {path: '**', component: HomeComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: false });
