import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpServiceService {

  constructor(private http: HttpClient) { }

  public getIPAddress(): Observable<any> {
    console.log('request to ip');
    // return this.http.get('https://api.ipify.org/?format=json');
    return this.http.get('https://api.my-ip.io/ip.json');
  }

}
