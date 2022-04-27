import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './Services/session.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor(
    public session: SessionService,
    private router: Router,
  ) {}

  logout() {
    this.session.clear();
    this.router.navigate(['/login']);
  }
 
}
