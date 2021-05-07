import { Component } from '@angular/core';

import skillTable from '../../assets/skills.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  displayedColumns: string[] = ['tech', 'level'];
  skillTable = skillTable;

  constructor() {}
}
