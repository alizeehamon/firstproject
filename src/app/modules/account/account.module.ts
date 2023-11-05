import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountFeaturesComponent } from './components/feature/account-feature.component';
import { AccountUiComponent } from './components/ui/account-ui.component';
import { AccountHomePageComponent } from './pages/account-home-page.component';


@NgModule({
  declarations: [AccountFeaturesComponent, AccountUiComponent, AccountHomePageComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
