
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { SessionService } from '../Services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  fg!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private session: SessionService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submit() {
    console.log("submit");
    if(this.fg.invalid) 
      return;
    this.loginService.login(this.fg.value).subscribe({
      next: (auth) => {
        this.session.save(auth.token);
        this.router.navigateByUrl('');
      },
      error: () => {
        console.log('Bad credentials');
      }
    })
  }

 
}
