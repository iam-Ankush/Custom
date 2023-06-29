import { Component, Input, OnInit } from '@angular/core';
import { noteData } from 'src/app/note';

@Component({
  selector: 'app-notes-logic',
  templateUrl: './notes-logic.component.html',
  styleUrls: ['./notes-logic.component.css']
})
export class NotesLogicComponent implements OnInit {

  @Input() "noteArray" : noteData

  constructor() { }

  ngOnInit(): void {
  }

}
