import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardReportComponent } from './board-report.component';

describe('BoardReportComponent', () => {
  let component: BoardReportComponent;
  let fixture: ComponentFixture<BoardReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
