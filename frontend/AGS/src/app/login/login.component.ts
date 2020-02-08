import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
        this.count++;
    }, 10);
  }

}
