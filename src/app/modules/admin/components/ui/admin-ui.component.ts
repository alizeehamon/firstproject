import { Component, Input } from "@angular/core";
import { User } from "src/app/modules/app/models/user.model";

@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html'
})
export class AdminUiComponent {

  @Input() users : User[] | undefined;

}
