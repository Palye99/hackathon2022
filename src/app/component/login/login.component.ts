import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: string;
  login: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.login = '';
    this.password = '';
  }

  ngOnInit(): void {
    if (this.authService.isUserLoggedIn()) {
      this.goToHome();
    }
  }

  loginSubmitEvent(): void {
    console.log('loginSubmitEvent');
    this.authService.authenticate(this.login, this.password).subscribe(res => {
      console.log('res', res);
      if (res) {
        this.goToHome();
      }
    });
  }

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

}
