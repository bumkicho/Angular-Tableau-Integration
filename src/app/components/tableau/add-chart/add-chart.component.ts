import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TableauChart } from 'src/TableauChart';

@Component({
  selector: 'app-add-chart',
  templateUrl: './add-chart.component.html',
  styleUrls: ['./add-chart.component.css']
})
export class AddChartComponent implements OnInit {

  @Output() addChartEmitter: EventEmitter<TableauChart> = new EventEmitter();
  
  description: string;
  url: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.url) {
      alert('please add a url');
      return;
    }

    const newChart = {
      url: this.url,
      description: this.description
    }

    this.addChartEmitter.emit(newChart);

    this.url = '';
    this.description = '';
  }

}
