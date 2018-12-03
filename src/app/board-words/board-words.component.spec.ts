import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardWordsComponent } from './board-words.component';

describe('BoardWordsComponent', () => {
  let component: BoardWordsComponent;
  let fixture: ComponentFixture<BoardWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
