import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public sidebarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  public sideBarToggle(): any {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
