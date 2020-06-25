import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.data.subscribe(({ form }) => console.log(form));
  }
}
