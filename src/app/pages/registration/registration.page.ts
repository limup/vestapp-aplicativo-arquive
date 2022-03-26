import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {LoadingController} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
  returnUrl: string;
  authState: boolean;

  constructor(private authService: AuthService,
    private loadingController: LoadingController,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() { 

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || null;
    this.authService.authState$.subscribe(state => {
      this.authState = state;

      if (this.authState) {
        if (this.returnUrl !== null) {
          this.router.navigateByUrl(this.returnUrl).then();
        } else {
          this.router.navigateByUrl('/').then();
        }
      }
    })
  }

  registration(registrationForm: NgForm) {

    if (registrationForm.invalid) {
      return;
    }

    else {
      const {email, password} = registrationForm.value;
      this.authService.login(email, password).then();
    }
     
  }

}



