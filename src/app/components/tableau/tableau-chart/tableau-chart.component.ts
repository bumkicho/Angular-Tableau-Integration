import { Component, OnInit, Input, OnChanges } from '@angular/core';
// import { TableauService } from 'src/app/services/tableau.service';
import { TableauChart } from 'src/TableauChart';

@Component({
  selector: 'app-tableau-chart',
  templateUrl: './tableau-chart.component.html',
  styleUrls: ['./tableau-chart.component.css']
})
export class TableauChartComponent implements OnInit, OnChanges {
  @Input() chart: TableauChart;
  showChart: boolean = false;

  constructor() {
    // should I need to do something with tableauService to refresh tableau chart on the page?
  }

  ngOnInit() {
    if (this.chart !== undefined) {
      this.showChart = true;
    } else {
      console.log('tableau-chart.chart undefined')
    }

  }

  displayChart(): boolean {
    return this.showChart;
  }

  ngOnChanges() {
    if (this.chart !== undefined) {
      this.showChart = true;
    } else  {
      console.log('tableau-chart.chart still undefined')
    }
  }

}
