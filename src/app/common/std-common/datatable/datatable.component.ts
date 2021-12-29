import { SelectionModel } from '@angular/cdk/collections';
import { EventEmitter, ViewChild } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatatableDataService } from '../datatable-data.service';
import { DataService } from './data.service';

export interface ColumnConfig {
  displayName: string;
  hide?: boolean;
  dataFn: (value: any) => any;
}

@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.css'],
    providers: [
        { provide: DataService, useClass: DatatableDataService }
    ]
})
export class DatatableComponent implements OnInit {

  @Input() columnConf?: Map<string, ColumnConfig> = new Map<string, ColumnConfig>();
  @Input() pageSize = 10;
  @Input() enabledSelection?: boolean = true;
  @Input() dataSource?: MatTableDataSource<any>;

  @Output() rowSelected = new EventEmitter<any[]>();
  @Output() page = new EventEmitter<PageEvent>();

  columns: string[] = [];
  rows: any[] = [];
  loading = false;
  selection = new SelectionModel<any>(true, []);

  paginator!: MatPaginator;

  @ViewChild(MatPaginator, {static: false}) set paginatorComponent(component: MatPaginator) {
      if (component) {
          this.paginator = component;
      }
  }

  pageTotal = 0;

  constructor(private dataService: DataService<any>) { }

  ngOnInit(): void {
      this.fetchData();
      this.genColumns();
  }

  genColumns() {
      this.columns = Object.keys(this.rows[0]);
      this.createDataSource();
  }

  createDataSource(): void {
      this.dataSource = new MatTableDataSource<any>(this.rows);
  }

  fetchData(): void {
      this.dataService.getDatum()
          .subscribe(datum => this.rows = datum);
  }
}
