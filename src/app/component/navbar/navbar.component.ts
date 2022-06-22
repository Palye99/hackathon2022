import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public autService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  test(): any {
    return this.autService.isUserLoggedIn();
  }

  logout(): void {
    this.autService.logOut();
    this.router.navigateByUrl('/login');
  }
}
