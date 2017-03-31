import { Routes } from '@angular/router';
import { MaterialExampleComponent } from './material-example.component';
import { MaterialSidenavComponent } from './material-sidenav/material-sidenav.component';
import { MaterialSliderComponent } from './material-slider/material-slider.component';
import { MaterialGridListComponent } from './material-grid-list/material-grid-list.component';
import { MaterialCardComponent } from './material-card/material-card.component';
import { MaterialSpinnerComponent } from './material-spinner/material-spinner.component';


export const MaterialExampleRoutes: Routes = [
  {
    path: 'material',
    component: MaterialExampleComponent,
    children: [
      {
        path: 'sidenav',
        component: MaterialSidenavComponent,
      },
      {
        path: 'slider',
        component: MaterialSliderComponent,
      },
      {
        path: 'gridlist',
        component: MaterialGridListComponent,
      },
      {
        path: 'card',
        component: MaterialCardComponent,
      },
      {
        path: 'spinner',
        component: MaterialSpinnerComponent,
      }
    ]
  }
];
