import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


const ELEMENT_DATA: any[] = [
  { firstname: 1, lastname: 'Hydrogen', email: 1.0079, city: 'H',state: 'H',country: 'H' },
  { firstname: 2, lastname: 'Helium', email: 4.0026, city: 'He',state: 'H',country: 'H' },
  { firstname: 3, lastname: 'Lithium', email: 6.941, city: 'Li' ,state: 'H',country: 'H'},
  { firstname: 4, lastname: 'Beryllium', email: 9.0122, city: 'Be' ,state: 'H',country: 'H'},
  { firstname: 5, lastname: 'Boron', email: 10.811, city: 'B' ,state: 'H',country: 'H'},
  { firstname: 6, lastname: 'Carbon', email: 12.0107, city: 'C',state: 'H',country: 'H' },
  { firstname: 7, lastname: 'Nitrogen', email: 14.0067, city: 'N' ,state: 'H',country: 'H'},
  { firstname: 8, lastname: 'Oxygen', email: 15.9994, city: 'O' ,state: 'H',country: 'H'},
  { firstname: 9, lastname: 'Fluorine', email: 18.9984, city: 'F',state: 'H',country: 'H' },
  { firstname: 10, lastname: 'Neon', email: 20.1797, city: 'Ne' ,state: 'H',country: 'H'},
];

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'city', 'state', 'country'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

}
