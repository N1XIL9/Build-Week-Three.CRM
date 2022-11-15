import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  error=undefined
  showAlert=false

  constructor(private authservice:ServiceService, private router:Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.authservice.login(form.value).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('userLogin', JSON.stringify(data));
          this.authservice.isLoggedIn = true;
          this.router.navigate(['/navbar']);
      },
      err => {
        console.log(err);
        this.error = err.error;
        this.showAlert = !this.showAlert
      })

  }

  close(){
    this.showAlert = !this.showAlert
  }
}
