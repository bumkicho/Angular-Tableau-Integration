import { Component, OnInit } from "@angular/core";
import { TableauService } from "src/app/services/tableau.service";
import { TableauChart } from "../../../../TableauChart";

@Component({
  selector: "app-tableau-table",
  templateUrl: "./tableau-table.component.html",
  styleUrls: ["./tableau-table.component.css"],
})
export class TableauTableComponent implements OnInit {
  tblCharts: TableauChart[];
  tblColumns: string[];

  constructor(tableauService: TableauService) {
    tableauService.getCharts().subscribe((charts) => (this.tblCharts = charts));
    this.tblColumns = this.getProperties();
  }

  ngOnInit() {}

  getProperties(): string[] {
    return ["id", "url", "description"];
  }
}
