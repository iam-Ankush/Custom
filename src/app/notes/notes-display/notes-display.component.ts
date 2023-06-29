import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DeleteConfirmModalComponent } from 'src/app/modal/delete-confirm-modal/delete-confirm-modal.component';
import { SuccessModalComponent } from 'src/app/modal/success-modal/success-modal.component';
import { UpdateModalComponent } from 'src/app/modal/update-modal/update-modal.component';
import { ApiService } from 'src/service/api.service';
export interface DialogData {
  id: number;
  message: string;
  title: string;
  desc: string;
  date: string;
  data: any
}

@Component({
  selector: 'app-notes-display',
  templateUrl: './notes-display.component.html',
  styleUrls: ['./notes-display.component.css']
})
export class NotesDisplayComponent implements OnInit {


  id: any;
  title!: string;
  description!: string;
  date!: string;
  notesArray: any = [];
  getAllNotes: any
  notesDataForm!: FormGroup;

  @Output() emitId = new EventEmitter<any>();
  @Output() emitForm = new EventEmitter<any>();

  @Input() successDelete: any

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, 
    private dialog: MatDialog
  ) {
    this.notesDataForm = this.formBuilder.group({
      title: ['' , [Validators.required , Validators.minLength(3)]],
      description: ['' , [Validators.required , Validators.minLength(5)]],
      date: ['' , [Validators.required]]
    })

  }
  ngOnInit(): void {
    this.getApiData();
  }

  get titleMessage(){
    return this.notesDataForm.get('title');
  }

  // getting the data from the service
  getApiData() {
    this.apiService.getData().subscribe(result => {
      this.notesArray = result;
    })
  }
//----------------------------------------------------------------------------------

  //on subitting the form
  onSubmit() {
    // adding data to the API
    this.apiService.addNote(this.notesDataForm.value).subscribe(val => {
      this.notesArray.push(val);
      const dialogRef = this.dialog.open(SuccessModalComponent , {
        disableClose: true,
        width: "800px",
        data: { message : 'Your Data Is Added Succesfully'}
      })
      
      // alert('Note is added Successfully');

      // resetting the form
      this.resetForm();
    },
    )
  }

  //----------------------------------------------------------------------------------

  //clear the form

  resetForm() {

    this.notesDataForm.reset()
  }

  //------------------------------------------------------------------------------------

  // delete the form

  onDelete(row: any) {
    
    const dialogRef = this.dialog.open(DeleteConfirmModalComponent, {
      disableClose: true,
      width: "800px",
      data: row.id
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'Delete Success') {
        this.apiService.deleteNote(row.id).subscribe(item => {
        
        setTimeout(() => {
          this.dialog.open(SuccessModalComponent, {
            disableClose: true,
            width: "800px",
            data: { message : 'Your Data Is Deleted Succesfully'}
          }
          )
        }, 1000);
        })
        this.getApiData();
      }
    });
  }

  //----------------------------------------------------------

  // ON EDIT THE NOTE

  onEdit(row: any) {
    console.log('rrrrr', this.notesArray)
    console.log('row id', row.id)

    // this.apiService.fetchNote(row.id).subscribe(item =>{
    //   console.log(item , 'iotem to be updated')
    //   dataToBeUpdated = item
    // })
    const dialogRef = this.dialog.open(UpdateModalComponent, {
      disableClose: true,
      width: "800px",
      data: row.id
    })

    dialogRef.afterClosed().subscribe((result: any) => {
      setTimeout(() => {
        this.dialog.open(SuccessModalComponent, {
          disableClose: true,
          width: "800px",
          data: { message : 'Your Data Is Updated Succesfully'}
        }
        )
      }, 1000);
      this.getApiData();
    })
  }
}

