import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TableauChart } from 'src/TableauChart';

// httpOptions could be used in the future.
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class TableauService {
  private jsonUrl: string = 'http://localhost:5000/charts';

  constructor(private httpClient: HttpClient) { }

  getCharts(): Observable<TableauChart[]> {
    const tableauCharts = this.httpClient.get<TableauChart[]>(this.jsonUrl);
    return tableauCharts;
  }
  
  addChart(chart: TableauChart): Observable<TableauChart> {
    const postApiUrl = `${this.jsonUrl}`;
    return this.httpClient.post<TableauChart>(postApiUrl, chart, httpOptions);
  }

  deleteChart(chart: TableauChart): Observable<TableauChart> {
    const delApiUrl = `${this.jsonUrl}/${chart.id}`;
    return this.httpClient.delete<TableauChart>(delApiUrl);
  }

  updateTask(chart: TableauChart): Observable<TableauChart> {
    const putApiUrl = `${this.jsonUrl}/${chart.id}`;
    return this.httpClient.put<TableauChart>(putApiUrl, chart, httpOptions);
  }

}
