import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-spinner',
  templateUrl: './material-spinner.component.html',
  styleUrls: ['./material-spinner.component.css']
})
export class MaterialSpinnerComponent implements OnInit {
  color = 'praimry';
  mode = 'determinate';
  value = 50;

  constructor() { }

  ngOnInit() {
  }

}
