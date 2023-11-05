import { Component, Input } from '@angular/core';
import { User } from 'src/app/modules/app/models/user.model';

@Component({
  selector: 'app-account-ui',
  templateUrl: './account-ui.component.html'
})
export class AccountUiComponent {

  @Input() user : User | undefined;

}
