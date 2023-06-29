import { Component, Input, OnInit , Inject, Output, EventEmitter} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef , MatDialogModule} from '@angular/material/dialog';
import { DialogData, NotesDisplayComponent } from 'src/app/notes/notes-display/notes-display.component';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-delete-confirm-modal',
  templateUrl: './delete-confirm-modal.component.html',
  styleUrls: ['./delete-confirm-modal.component.css'],

})
export class DeleteConfirmModalComponent implements OnInit {




  constructor(private apiService: ApiService, public dialogRef: MatDialogRef<DeleteConfirmModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { }

  ngOnInit(): void {
  }


  onConfirmDelete() {
    const successData = 'Delete Success';
    this.dialogRef.close(successData)
  }

  onCloseModal(data : any) {
    const CancelData = 'Delete Cancel';
    this.dialogRef.close(CancelData);
  }
}
