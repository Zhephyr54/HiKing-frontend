import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import {HomeComponent} from './home/home.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // TODO faire un component 404
  {path: '**', component: HomeComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: false });
