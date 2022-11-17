import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Users } from 'src/app/auth/Users';
import { ServiceService } from 'src/app/auth/service.service';

@Component({
  selector: 'app-dettagli-utente',
  templateUrl: './dettagli-utente.component.html',
  styleUrls: ['./dettagli-utente.component.scss'],
})
export class DettagliUtenteComponent implements OnInit {
  user!: any;
  // user: Users = {} as Users;
  bool = false;
  userForm!: FormGroup;

  constructor(
    private authService: ServiceService,
    private activateRouter: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.activateRouter.params.subscribe((params) => {
      const id = +params['id'];
      this.authService.getUserDetails(id).subscribe((data) => {
        this.user = data;
      });
    });

    this.userForm = this.formBuilder.group({
      firstname: '',
      lastname: '',
      age: '',
      roles: '',
      email: '',
    });
  }

  onSubmit() {
    this.authService
      .changeRole(this.user.id, this.userForm.value)
      .subscribe((data) => {
        console.log(data);
      });
  }

  changeProp() {
    this.bool = !this.bool;
    this.userForm.get('firstname')?.setValue(this.user.firstname);
    this.userForm.get('lastname')?.setValue(this.user.lastname);
    this.userForm.get('age')?.setValue(this.user.age);
    this.userForm.get('roles')?.setValue(this.user.roles);
    this.userForm.get('email')?.setValue(this.user.email);
    console.log(this.userForm.value);
  }

  deleteUser(user: any) {
    if (confirm('Vuoi eliminare questo utente?')) {
      this.authService.deleteUser(user.id).subscribe(
        (resp) => {
          this.user;
        },
        (error) => console.log(error)
      );
    }
  }
}
