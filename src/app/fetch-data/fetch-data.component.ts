import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClaimForm } from '../claim-form/claimform';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  // public claimforms: ClaimForm[];
  public claimforms: any;
   constructor(){
       this.claimforms = [
         {
        "id": 1,
        "name": "Ashok 1",
        "phone": "111111111",
        "email": "test@gmail.com"
         },
         {
        "id": 2,
        "name": "Ashok 2",
        "phone": "111111111",
        "email": "test@gmail.com"
         },
         {
        "id": 3,
        "name": "Ashok 3",
        "phone": "111111111",
        "email": "test@gmail.com"
         },
         {
        "id": 4,
        "name": "Ashok 4",
        "phone": "111111111",
        "email": "test@gmail.com"
         },
       ]
       
   }

}

