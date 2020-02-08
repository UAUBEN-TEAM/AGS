import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  count = 0;
  title = 'AGS';
  counter;

  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {

    this.counter = setInterval( () => {
      this.count++;
    }, 10);



  }


}
