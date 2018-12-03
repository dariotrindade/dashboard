import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-report',
  templateUrl: './board-report.component.html',
  styleUrls: ['./board-report.component.css']
})
export class BoardReportComponent implements OnInit {

  board = {}

  constructor(private data: DataService, public router :Router) { }

  ngOnInit() {
    this.board = this.getBoard();
  }

  getBoard() {
    return this.data.getData().home;
  }




}

