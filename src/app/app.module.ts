/*
 * @Author: Rajkeshwar Prasad (rajkeshwar.pd@gmail.com) 
 * @Date: 2017-10-13 22:44:12 
 * @Last Modified by: rajkeshwar.pd@gmail.com
 * @Last Modified time: 2017-10-14 00:59:36
 */
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { DataTableModule, SharedModule, InputTextModule, MultiSelectModule, DropdownModule,
    SliderModule, TabMenuModule, ButtonModule, CheckboxModule, GrowlModule } from 'primeng/primeng';

import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        TodoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        DataTableModule,
        SharedModule,
        TabMenuModule,
        ButtonModule,
        InputTextModule, MultiSelectModule, DropdownModule,
        SliderModule,
        BrowserAnimationsModule,
        CheckboxModule,
        GrowlModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
