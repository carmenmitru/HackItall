import { NavbarComponent } from './navbar/navbar.component';
import { firebaseConfig } from './../environments/firebase-config';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu-list/menu-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


//RoutingModule
import { RoutingModule } from './app.routing';
import {AngularFireModule} from 'angularfire2/index';


//Libraries
import {ToastyModule} from 'ng2-toasty';
import {SimpleNotificationsModule, PushNotificationsModule} from 'angular2-notifications';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    ToastyModule.forRoot(),
    SimpleNotificationsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
