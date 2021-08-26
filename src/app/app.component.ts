import { Component } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search: string = '';

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/search', this.search]);
    this.search = '';
    //console.log(this.search);
  }

  onSelect($event: any) {
    if ($event.target.value !== '') {
      this.router.navigateByUrl('/home' + '?category=' + $event.target.value);
    } else {
      this.router.navigate(['/home']);
    }
    //console.log($event.target.value);
  }
}
