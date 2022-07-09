import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMobileScreen!: boolean;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobileScreen = event.target.innerWidth <= 765 ? true : false;
  }

  constructor() {}

  ngOnInit(): void {}
}
