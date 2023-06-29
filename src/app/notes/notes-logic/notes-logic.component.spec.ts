import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesLogicComponent } from './notes-logic.component';

describe('NotesLogicComponent', () => {
  let component: NotesLogicComponent;
  let fixture: ComponentFixture<NotesLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesLogicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
