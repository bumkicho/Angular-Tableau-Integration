import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TableauService } from 'src/app/services/tableau.service';
import { TableauChart } from 'src/TableauChart';

@Component({
  selector: 'app-tableau-table',
  templateUrl: './tableau-table.component.html',
  styleUrls: ['./tableau-table.component.css']
})
export class TableauTableComponent implements OnInit, OnChanges {
  @Input() tblCharts: TableauChart[];
  tblColumns: string[];

  constructor(private tableauService: TableauService) {
  }

  ngOnInit() {
    if (this.tblCharts === undefined) {
      console.log('tblCharts undefined');
      this.tableauService.getCharts().subscribe(charts => this.tblCharts = charts);
    }

    this.tblColumns = this.getProperties();
  }

  getProperties(): string[] {
    return ['id', 'url', 'description'];
  }

  ngOnChanges() {
    console.log('hmm.. why is it not in console?')
    // this.tableauService.getCharts().subscribe(charts => this.tblCharts = charts);
    // this.tblColumns = this.getProperties();
  }

}
