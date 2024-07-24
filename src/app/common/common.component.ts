import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {
  @Input() displayedcolumns: any
  @Input() data: any
  pagination = [5, 10, 50, 100];

  @ViewChild(MatSort) sort: MatSort | any;  
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  
  constructor() { }
  
  ngOnInit(): void {
    console.log("PAGINATION::", this.data);
    
    console.log(this.data, this.displayedcolumns)
  }
  ngAfterViewInit() {
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
  }
}
