import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClaimForm } from '../claim-form/claimform';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public claimforms: ClaimForm[];
  
}

