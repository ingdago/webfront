import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './login/login.component';
import { ThemeComponent } from './theme/theme.component';
import { UsersComponent } from './pages/administration/users/users.component';
import { RolesComponent } from './pages/administration/roles/roles.component';
import { AreasComponent } from './pages/settings/areas/areas.component';
import { AuthorsComponent } from './pages/settings/authors/authors.component';
import { BooksComponent } from './pages/settings/books/books.component';
import { CategoriesComponent } from './pages/settings/categories/categories.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ThemeComponent,
    UsersComponent,
    RolesComponent,
    AreasComponent,
    AuthorsComponent,
    BooksComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
