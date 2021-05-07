import { Component, Input, Inject } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

interface worksType {
  id: string
  title: string
  imgPass: string
  imgAlt: string
  url: string
  code: string
  how: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() worksDict: worksType = {
    id: '',
    title: '',
    imgPass: '',
    imgAlt: '',
    url: '',
    code: '',
    how: '',
  };

  commonImagePath = 'assets/';

  constructor(public dialog: MatDialog) {}

  howDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        how: this.worksDict.how
      }
    });
  }

}

@Component({
  selector: 'dialog-component',
  templateUrl: 'dialog-component.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {how: string}) {}
}
