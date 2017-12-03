import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {APP_ROUTES} from './app.route';
import { HikingComponent } from './hiking/hiking.component';
import { EditHikingComponent } from './edit-hiking/edit-hiking.component';
import { CardHikingComponent } from './shared/card-hiking/card-hiking.component';
import { FormSearchHikingComponent } from './shared/form-search-hiking/form-search-hiking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HikingComponent,
    EditHikingComponent,
    CardHikingComponent,
    FormSearchHikingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
