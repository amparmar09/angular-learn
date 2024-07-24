import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen: boolean = true;
  @Input() navbar: any
  @Input() drawer!: MatDrawer;
  @Output() sideNav: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.sideNav.emit(this.isOpen = !this.isOpen)
  }
}
