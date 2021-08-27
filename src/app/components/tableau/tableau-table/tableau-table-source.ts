import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from 'rxjs';
import { TableauChart } from 'src/TableauChart';
import { TableauService } from 'src/app/services/tableau.service';

export class TableauDataSource implements DataSource<TableauChart> {

    private tableauSubject = new BehaviorSubject<TableauChart[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private tableauService: TableauService) { }

    connect(collectionViewer: CollectionViewer): Observable<TableauChart[]> {
        return this.tableauSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.tableauSubject.complete();
        this.loadingSubject.complete();
    }

    /*
    loadCharts(chartId: number, filter: string,
        sortDirection: string, pageIndex: number, pageSize: number) {
        this.loadingSubject.next(true);

        this.tableauService.getCharts().pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(lessons => this.lessonsSubject.next(lessons));
    }
    */

}