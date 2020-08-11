import { Component } from '@angular/core';
import { ClaimForm } from './claimform';
@Component({
  selector: 'app-claim-form',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class claimformComponent {
  states = ['PA', 'FL',
    'NY', 'NJ'];

  model = new ClaimForm();

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newForm() {
    this.model = new ClaimForm();
  }
}
