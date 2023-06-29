import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesDisplayComponent } from './notes/notes-display/notes-display.component';
import { NotesLogicComponent } from './notes/notes-logic/notes-logic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DeleteConfirmModalComponent } from './modal/delete-confirm-modal/delete-confirm-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SuccessModalComponent } from './modal/success-modal/success-modal.component';
import { UpdateModalComponent } from './modal/update-modal/update-modal.component';
// import { ModalModule } from './_modal';

@NgModule({
  declarations: [
    AppComponent,
    NotesDisplayComponent,
    NotesLogicComponent,
    DeleteConfirmModalComponent,
    SuccessModalComponent,
    UpdateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
