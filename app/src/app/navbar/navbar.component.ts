import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  name:any
  user:any


  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('userLogin')
    this.user = JSON.parse(this.name)
  }


utenti(){
  this.router.navigate(['utenti'],{relativeTo:this.route})
}

}
