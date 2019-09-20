import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AreasComponent } from './areas/areas.component';


const routes: Routes = [
  {
    path: 'categories',
    component: SettingsComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'authors', 
    component: AuthorsComponent
  },
  {
    path: 'areas', component:AreasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
