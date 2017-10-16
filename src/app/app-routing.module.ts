/*
 * @Author: Rajkeshwar Prasad (rajkeshwar.pd@gmail.com) 
 * @Date: 2017-10-13 22:43:56 
 * @Last Modified by: rajkeshwar.pd@gmail.com
 * @Last Modified time: 2017-10-13 22:51:48
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'todos', component: TodoComponent}
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}