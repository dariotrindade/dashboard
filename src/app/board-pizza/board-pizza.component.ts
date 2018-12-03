import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-board-pizza',
  templateUrl: './board-pizza.component.html',
  styleUrls: ['./board-pizza.component.css']
})
export class BoardPizzaComponent {

  board = {}

  public doughnutChartLabels: string[] = ['Erro', 'Pagamento', 'Cancelamento', '2 via', 'Dúvidas'];
  public barChartOptions: any = {
    legend: {
      position: 'right',
      margin: 'right'
    }
  }
  public doughnutChartData: number[] = [30, 38, 50, 50, 45, 80];
  public doughnutChartType: string = 'doughnut';
  public barChartColors: any = [{
    backgroundColor: [
      '#03A0F1',
      '#FF447B',
      '#FF9B1F',
      '#FFD046',
      '#04C5C4',
    ]
  }
  ];

  constructor(private data: DataService) { }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  // getBoard() {
  //   return this.data.getData().home;
  // }


}
