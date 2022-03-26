import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../models/customerModel';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  custumer: CustomerModel; 

  constructor(private accountService: AccountService) {}

    ngOnInit() {
        
    }
  
}
 