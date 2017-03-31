import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-grid-list',
  templateUrl: './material-grid-list.component.html',
  styleUrls: ['./material-grid-list.component.css']
})
export class MaterialGridListComponent implements OnInit {
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
