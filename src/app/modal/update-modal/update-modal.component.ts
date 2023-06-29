import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { noteData } from 'src/app/note';
import { DialogData } from 'src/app/notes/notes-display/notes-display.component';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {


  postId:any;
  @Input() formData :any;
  fetchedData : any ={};
  updatedNoteForm! : FormGroup
  constructor(private apiService : ApiService , private dialogRef : MatDialogRef<UpdateModalComponent> , @Inject(MAT_DIALOG_DATA) public data: DialogData , private formBuilder: FormBuilder) {
    this.updatedNoteForm = this.formBuilder.group({
      title : '',
      description: '',
      date: ''
    })
   }

  ngOnInit(): void {

    this.postId = this.data;
    
    console.log('data ki id' , this.data , typeof(this.data) )
    this.apiService.fetchNote(this.postId ).subscribe( item =>{
     
      this.fetchedData = item;
      // console.log(this.fetchedData , 'fetch kiya huaitemmmm')
    })
  }

  onSubmit(updatedForm:any){
    const id = this.postId;
    console.log(updatedForm , 'updfatred formm')
    console.log(this.updatedNoteForm.value)
    this.apiService.updateNote(id , this.updatedNoteForm.getRawValue()).subscribe(data =>{
      console.log(data , 'update wala item')
      this.dialogRef.close();
    })
  }


    onCancel(){
      this.dialogRef.close();
    }

}
