import { NgModule, Component } from "@angular/core";
import {Routes,RouterModule, Router} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ThemeComponent } from './theme/theme.component';
import { UsersComponent } from './pages/administration/users/users.component';
import { RolesComponent } from './pages/administration/roles/roles.component';
import { AreasComponent } from './pages/settings/areas/areas.component';
import { AuthorsComponent } from './pages/settings/authors/authors.component';
import { BooksComponent } from './pages/settings/books/books.component';
import { CategoriesComponent } from './pages/settings/categories/categories.component';

export const routes: Routes=[
    {
        path : 'login', 
        component : LoginComponent 
    },

    {
        path : 'pages',
        component : ThemeComponent,
        children: [
        {path: 'users', component:UsersComponent}]
    },

    { 
        path : 'pages',
       component : ThemeComponent,
       children: [
       {path: 'roles', component:RolesComponent}]},

    {
        path : 'pages',
        component : ThemeComponent,
        children: [
        {path: 'areas', component:AreasComponent}]
    },
    {
        path : 'pages',
        component : ThemeComponent,
        children: [
        {path: 'authors', component:AuthorsComponent}]
    },
    {
        path : 'pages',
        component : ThemeComponent,
        children: [
        {path: 'books', component:BooksComponent}]
    },
    {
        path : 'pages',
        component : ThemeComponent,
        children: [
        {path: 'categories', component:CategoriesComponent}]
    },

    { path : 'pages',
     component : ThemeComponent,
     children: [{path: '',
    loadChildren:'./pages/dashboard/dashboard.module#DashboardModule'}]},
    
   
]
@NgModule({
imports:[ RouterModule.forRoot(routes,{useHash:true})
],
exports:[RouterModule],
providers:[]
}) 
export class AppRoutingModule {}
