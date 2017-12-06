import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.route';
import { HikingComponent } from './hiking/hiking.component';
import { EditHikingComponent } from './edit-hiking/edit-hiking.component';
import { CardHikingComponent } from './shared/card-hiking/card-hiking.component';
import { FormSearchHikingComponent } from './shared/form-search-hiking/form-search-hiking.component';
import { FormHikingComponent } from './shared/form-hiking/form-hiking.component';
import {HikingService} from './shared/hiking-service/hiking.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { CreateHikingComponent } from './create-hiking/create-hiking.component';
import { CardUserComponent } from './shared/card-user/card-user.component';
import {UserService} from './shared/user-service/user.service';
import {FakeLoginService} from './shared/fake-login-service/fake-login.service';
import { NotFound404Component } from './not-found-404/not-found-404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HikingComponent,
    EditHikingComponent,
    FormHikingComponent,
    CardHikingComponent,
    FormSearchHikingComponent,
    CreateHikingComponent,
    CardUserComponent,
    NotFound404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    APP_ROUTES
  ],
  providers: [
    HikingService,
    UserService,
    FakeLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
