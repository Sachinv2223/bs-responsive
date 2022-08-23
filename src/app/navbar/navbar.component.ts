import { Component, OnInit } from '@angular/core';
import { link } from '../model/link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuHidden = true;

  showMenu() {
    this.menuHidden = !this.menuHidden;
  }

  formatMenu() {
    if(this.menuHidden){
      return "-top-[60px] opacity-0";
    }
    else{
      return "top-[60px] opacity-100";
    }
  }

  links: link[] = [
    { 'name': 'home', 'address': '#' },
    { 'name': 'service', 'address': '#' },
    { 'name': 'about', 'address': '#' },
    { 'name': 'contacts', 'address': '#' }
  ]

}
