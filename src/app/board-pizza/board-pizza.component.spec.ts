import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPizzaComponent } from './board-pizza.component';

describe('BoardPizzaComponent', () => {
  let component: BoardPizzaComponent;
  let fixture: ComponentFixture<BoardPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
