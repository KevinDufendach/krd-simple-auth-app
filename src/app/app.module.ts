import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {SmartAuthService} from './smart-auth.service';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: 'afterlaunch', component: LandingComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [SmartAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
