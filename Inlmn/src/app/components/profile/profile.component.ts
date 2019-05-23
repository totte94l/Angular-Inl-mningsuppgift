import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { userInfo } from 'os';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  editingInfo: boolean = false;
  user:object;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn();
    this.getInfo();
  }

  isLoggedIn = () => {
  if( this.authService.isLoggedIn() ) {
    return true;
  } else {
    this.router.navigateByUrl("/");
    return false;
  }
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn();
  }

  test() {
    console.log(this.user);
  }

  getInfo() {
    this.authService.getUser()
      .subscribe((res => {
        this.user = res[0];
      }))
    }
}
