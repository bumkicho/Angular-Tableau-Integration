import { Component, OnInit, Input } from '@angular/core';
import { TableauService } from 'src/app/services/tableau.service';
import { TableauChart } from 'src/TableauChart';

@Component({
  selector: 'app-tableau-chart',
  templateUrl: './tableau-chart.component.html',
  styleUrls: ['./tableau-chart.component.css']
})
export class TableauChartComponent implements OnInit {
  @Input() chart: TableauChart;

  constructor(tableauService: TableauService) {
    // should I need to do something with tableauService to refresh tableau chart on the page?
  }

  ngOnInit() {
  }

}
