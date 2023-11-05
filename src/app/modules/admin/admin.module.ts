import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/feature/admin-feature.component';
import { AdminUiComponent } from './components/ui/admin-ui.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminUiComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
