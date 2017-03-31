import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-slider',
  templateUrl: './material-slider.component.html',
  styleUrls: ['./material-slider.component.css']
})
export class MaterialSliderComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : null;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;

  constructor() { }

  ngOnInit() {
  }

}
