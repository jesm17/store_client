import { Component, ErrorHandler, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Login } from 'src/app/models/login/login.model';
import { AuthService } from 'src/app/services/auth/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  login: Login = {
    email: '',
    password: '',
  };
  matcher = new MyErrorStateMatcher();

  viewData() {
    console.log(this.loginForm.value);
  }

  adminSigIn() {
    this.login.email = this.loginForm.value.email;
    this.login.password = this.loginForm.value.password;
    this.authService.adminSigIn(this.login).subscribe({
      next: (res: any) => (
        sessionStorage.setItem('token', res.token),
        this.openSnackBar('Credenciales correctas')
      ),
      error: (e) => this.openSnackBar(e.error.message),
    });
  }

  openSnackBar(text: string) {
    this._snackBar.open(text, 'close', { duration: 3000 });
  }
}
