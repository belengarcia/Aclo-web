import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  mail: string;
}

@Component({
  selector: 'app-user-fuck-off-email',
  templateUrl: './user-fuck-off-email.component.html',
  styleUrls: ['./user-fuck-off-email.component.css']
})
export class UserFuckOffEmailComponent{
  mail: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {mail: this.mail}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.mail = result;
    });
  }
}

@Component({
  selector: 'app-user-fuck-off-email-dialog',
  templateUrl: './user-fuck-off-email-dialog.component.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
