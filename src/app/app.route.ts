import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import {HomeComponent} from './home/home.component';
import {HikingComponent} from './hiking/hiking.component';
import {EditHikingComponent} from './edit-hiking/edit-hiking.component';
import {CreateHikingComponent} from './create-hiking/create-hiking.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hiking/:id', component: HikingComponent },
  { path: 'edit/hiking/:id', component: EditHikingComponent},
  { path: 'create/hiking', component: CreateHikingComponent},

  // TODO faire un component 404
  {path: '**', component: HomeComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: false });
