import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {
@Input() displayedcolumns: any
@Input() data: any
  constructor() { }

  ngOnInit(): void {
    console.log(this.data,this.displayedcolumns)
  }

}
