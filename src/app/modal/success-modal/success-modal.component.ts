import { Component, OnInit , Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from 'src/app/notes/notes-display/notes-display.component';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<SuccessModalComponent> ,  @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    // console.log(this.data ,'ppppppppppppppppp')
    // // const message = this.data;
    // // console.log(message)

    setTimeout(() => {
      this.dialogRef.close();
    }, 2000);
  }

}
