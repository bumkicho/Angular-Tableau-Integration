import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TableauService } from '../../services/tableau.service';
import { TableauChart } from '../../../TableauChart';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  @Output() loadChartEmitter: EventEmitter<TableauChart> = new EventEmitter();
  @Output() loadChartsEmitter: EventEmitter<TableauChart[]> = new EventEmitter();

  charts: TableauChart[] = [];
  tableauChartUrl: string;
  chart: TableauChart;
  tableauChartID: number;

  constructor(private tableauService: TableauService) {

  }

  ngOnInit(): void {
    this.tableauChartID = 1; // default
    this.tableauService.getCharts().subscribe((charts) => this.setCharts(charts));
  }

  show(): boolean {
    if (this.tableauChartUrl !== null) {
      return true;
    }
    return false;
  }

  setCharts(tCharts: TableauChart[]) {
    tCharts.forEach(element => {
      this.charts.push(element);
    });

    this.tableauChartUrl = this.getChartUrl(this.tableauChartID);
  }

  getChartUrl(idx: number): string {
    if (this.charts.length > 0) {
      // this.charts.filter(c => console.log(c.id));
      this.chart = this.charts.filter(c => c.id === idx)[0];
      return this.charts.filter(c => c.id === idx)[0].url;
    }
    return '';
  }

  selectChart(): void {
    // console.log('selected item index is ' + this.tableauChartID);
    this.tableauChartUrl = this.getChartUrl(+this.tableauChartID);
    this.loadChartEmitter.emit(this.chart);
  }

  addChart(chart: TableauChart): void {
    console.log(chart);
    this.tableauService.addChart(chart).subscribe((chart) => this.charts.push(chart));
    this.loadChartsEmitter.emit(this.charts);
    console.log('emit charts output');
  }

}
