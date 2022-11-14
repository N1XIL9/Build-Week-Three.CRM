import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {

  constructor(private authService:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.authService.signup(form.value).subscribe(
      data=>{
      console.log(data);
      this.router.navigate(['/login'])
      })
  }

}
