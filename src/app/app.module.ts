import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.route';
import { HikingComponent } from './hiking/hiking.component';
import { EditHikingComponent } from './edit-hiking/edit-hiking.component';
import { FormHikingComponent } from './shared/form-hiking/form-hiking.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HikingComponent,
    EditHikingComponent,
    FormHikingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
