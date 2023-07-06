import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {user} from './ILogin';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import {HttpErrorResponse} from '@angular/common/http';
import {BnNgIdleService} from 'bn-ng-idle';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private loginservice: LoginService, private router: Router, private bnIdle: BnNgIdleService) {
    this.bnIdle.startWatching(300).subscribe((res) => {
      if (res) {
        console.log('session expired');
        // sessionStorage.clear();
        // this.router.navigate(['/login']);
      }
    });
  }
  focus;
  focus1;
  email: String;
  condition: boolean;
  login(addForm: NgForm) {
    console.log('loginnnnn');
    console.log(addForm.value);
    this.loginservice.getuser(addForm.value).subscribe(
        (response: user ) => {
          console.log(response);
          // console.log(response);
          sessionStorage.setItem('id', response.id);
          sessionStorage.setItem('prenom', response.prenom);
          sessionStorage.setItem('email', response.email);
          sessionStorage.setItem('psw', response.password);
          sessionStorage.setItem('role', response.role);
          console.log(sessionStorage);

          if (response.id != null && sessionStorage.getItem('role') === 'admin' ) {
            this.router.navigate(['/landing']);

          } else {
            this.router.navigate(['/home']);

          }
          // console.log(response);
        }, (error) => {
            console.log('An error occurred:', error);
        }
    );
  }

  isAdmin() {
    if ( sessionStorage.getItem('role') === 'admin') {
      this.condition = true;
    }
  }
  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
