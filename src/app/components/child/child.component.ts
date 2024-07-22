import {  Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],

})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
  }
  
  @Input() dataSource : any[]=[];
  @Input() displayedColumns: string[]=[]

  // @Input() item: any
  // @Output() newItemEvent = new EventEmitter();

}
