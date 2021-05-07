import { Component } from '@angular/core';

import favorite from '../../assets/favorite.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  favorite = favorite;

  constructor() {}

}
