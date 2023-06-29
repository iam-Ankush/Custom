import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { noteData } from 'src/app/note';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  notesUrl = 'http://localhost:3000/notes/';
  notesList:noteData[] = [];

  constructor(private http: HttpClient) { }

  // to get all the data to show on UI
  getData() {
    return this.http.get<noteData>(this.notesUrl)
  }

  // to add  the data in API
  addNote(data: any): Observable<any> {
    return this.http.post<any>(this.notesUrl, data)
  }

  // fetch data with id for Update but with help of the ID number
  fetchNote(id : any){
    return this.http.get<any>(this.notesUrl + id)
  }

  // to delete a note with the help of ID
  deleteNote(id: string) {
    return this.http.delete<any>(this.notesUrl + id)
  }


  // to update a note
  updateNote(id: any , noteData: noteData) {
    // const index = this.notesList.findIndex(c=> c.id === id);
    // this.notesList[index] = noteData
    return this.http.put<any>(this.notesUrl+id, noteData)
  }
}
