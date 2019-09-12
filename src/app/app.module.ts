import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './login/login.component';
import { ThemeComponent } from './theme/theme.component';
//import { Rolescomponent } from './roles/roles.component';
@NgModule({
  declarations: [
    AppComponent,LoginComponent, ThemeComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
