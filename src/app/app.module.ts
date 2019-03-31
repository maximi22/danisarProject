import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Route} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Route[]=[
  {path:'home',component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact-us',component: ContactUsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    TaskbarComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
