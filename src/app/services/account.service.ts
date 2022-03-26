import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { CustomerModel } from "../models/customerModel";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    private url = environment.backend_api_url;

    constructor(private httpClient: HttpClient) {
    }

    
}