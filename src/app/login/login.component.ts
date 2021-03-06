import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { LoginService } from '../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.translate.use(localStorage.getItem('lang_key'));
  }

  useLanguage() {
    if (localStorage.getItem('lang_key') == "en") {
      localStorage.setItem('lang_key', 'ar');
      this.translate.use(localStorage.getItem('lang_key'));
    }
    else if (localStorage.getItem('lang_key') == "ar") {
      localStorage.setItem('lang_key', 'en');
      this.translate.use(localStorage.getItem('lang_key'));
    }

  }

}
