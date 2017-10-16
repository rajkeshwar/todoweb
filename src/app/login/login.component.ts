/*
 * @Author: Rajkeshwar Prasad (rajkeshwar.pd@gmail.com) 
 * @Date: 2017-10-13 22:44:52 
 * @Last Modified by: rajkeshwar.pd@gmail.com
 * @Last Modified time: 2017-10-14 01:37:29
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public user: any = {
      username: '',
      password: ''
  };
  public errorMessages = [];

  constructor(private router: Router) { }

  login() {
    if(this.user.username === '' || this.user.password === '') {
        this.errorMessages.push({severity:'error', summary:'Error', detail:'Username or pasword is wrong'});
    } else {
        this.errorMessages.push({severity:'success', summary:'Logged In', detail:'Redirecting to todos'});
        this.router.navigate(['/todos']);
    }
    setTimeout(_ => this.errorMessages.length = 0, 3000);    
  }

}
