import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RolesComponent } from './roles/roles.component';



@NgModule({
  declarations: [UserComponent, RolesComponent],
  imports: [
    CommonModule
  ]
})
export class AdminitrationModule { }
