import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DatatableDataService } from '../datatable-data.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
  providers: [
    { provide: DataService, useClass: DatatableDataService }
  ]
})
export class DatatableComponent implements OnInit {

  
  columns: string[] = [];
  rows: Object[] = [];
  dataSource?: MatTableDataSource<Object>;

  constructor(private dataService: DataService<Object>) { }

  ngOnInit(): void {
    this.fetchData();
    this.GenColumns();
  }
  
  GenColumns() {
    this.columns = Object.keys(this.rows[0])
    this.createDataSource();
  }
  
  createDataSource(): void {
    this.dataSource = new MatTableDataSource<Object>(this.rows);
  }

  fetchData(): void {
    this.dataService.getDatum()
      .subscribe(datum => this.rows = datum);
  }
}
