import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGraphicComponent } from './board-graphic.component';

describe('BoardGraphicComponent', () => {
  let component: BoardGraphicComponent;
  let fixture: ComponentFixture<BoardGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
