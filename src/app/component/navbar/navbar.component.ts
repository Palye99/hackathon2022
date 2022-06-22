import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {CommandService} from '../../service/command.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public autService: AuthService,
              private commandService: CommandService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.autService.logOut();
    this.router.navigateByUrl('/login');
  }

  test(): void {
    this.commandService.test().subscribe(res => console.log(res));
  }
}
