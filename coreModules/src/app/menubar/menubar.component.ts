import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  products(){
  this.router.navigate(['componentt/products'])}

}
