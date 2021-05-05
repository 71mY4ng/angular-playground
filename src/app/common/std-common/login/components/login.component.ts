import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private auth: AuthService,
    private snackBar: MatSnackBar,
  ) {
    this.loginForm = fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      this.auth.login({
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value
      }).subscribe(resp => {
        this.snackBar.open(`Welcome! ${this.auth.username}.`, 'confirm', {
          duration: 5 * 1000
        })
      }, (error: HttpErrorResponse) => {
        console.log(error);
        let msg = error.status >= 500 ? 'Something wrong! please retry later.' : error.error.message;

        this.snackBar.open(`[${error.status}] ${msg}`, 'dismiss', {
          duration: 5 * 1000
        });
      })
    }
  }

}
