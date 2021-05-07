import { Component } from '@angular/core';

import data from '../../assets/data.json';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {

  data = data;

  constructor() {}

}
