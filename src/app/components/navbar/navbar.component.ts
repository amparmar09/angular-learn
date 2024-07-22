import { Component, OnInit,Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
@Input() navbar:any
@Input() drawer!: MatDrawer; 
@Output() toggleNav = new EventEmitter();

  constructor() { }
  isOpen = false; 
  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;  
    this.toggleNav.emit(); 
  } 
}
