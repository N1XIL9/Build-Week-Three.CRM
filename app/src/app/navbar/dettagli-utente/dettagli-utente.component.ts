import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServiceService } from 'src/app/auth/service.service';
import { Users } from 'src/app/auth/Users';

@Component({
  selector: 'app-dettagli-utente',
  templateUrl: './dettagli-utente.component.html',
  styleUrls: ['./dettagli-utente.component.scss'],
})
export class DettagliUtenteComponent implements OnInit {
  user: any;
  bool = false;
  // userArr: any[] = [];

  // @ViewChild('f') f = NgForm;

  constructor(
    private authService: ServiceService,
    private activateRouter: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activateRouter.params.subscribe((params) => {
      const id = +params['id'];

      this.authService.getUserDetails(id).subscribe((data) => {
        this.user = data;
      });
    });
  }

  onSubmit(form: NgForm) {
    // form.value.firstname === ''
    //   ? this.userArr.push(this.user.firstname)
    //   : this.userArr.push(form.value.firstname);
    // form.value.lastname === ''
    //   ? this.userArr.push(this.user.lastname)
    //   : this.userArr.push(form.value.lastname);
    // form.value.age === ''
    //   ? this.userArr.push(this.user.age)
    //   : this.userArr.push(form.value.age);
    // form.value.role === ''
    //   ? this.userArr.push(this.user.role)
    //   : this.userArr.push(form.value.role);
    // form.value.email === ''
    //   ? this.userArr.push(this.user.email)
    //   : this.userArr.push(form.value.email);
    // console.log(this.userArr);
    // console.log(this.user.firstname);
    // this.userDetail = Object.assign({}, this.userArr);
    // this.authService
    //   .changeRole(this.user.id, obj)
    //   .subscribe((data) => {
    //     console.log(data);
    //   });

    form.setValue({
      name: this.user.name,
      lastname: this.user.lastname,
      age: this.user.age,
      role: this.user.role,
      email: this.user.email,
    });

    this.authService.changeRole(this.user.id, form.value).subscribe((data) => {
      console.log(data);
    });
  }

  changeProp() {
    this.bool = !this.bool;
  }

  deleteUser() {}

  // changePropPwd() {
  //   this.boolPwd = !this.boolPwd;
  // }
  // changePropRole() {
  //   this.boolRole = !this.boolRole;
  // }
  // changePropEmail() {
  //   this.boolEmail = !this.boolEmail;
  // }
  // changePropAge() {
  //   this.boolAge = !this.boolAge;
  // }
  // changePropLastname() {
  //   this.boolLastname = !this.boolLastname;
  // }
  // changePropName() {
  //   this.boolName = !this.boolName;
  // }
}
