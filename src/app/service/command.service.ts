import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private http: HttpClient) { }

  execCommand(command: string): Observable<any> {
    return this.http.post('http://myinstantcode-back.ddns.net/api/command', { command });
  }

  test(): Observable<any> {
    return this.http.get('http://myinstantcode-back.ddns.net/api/command');
  }

  execTerraform(selectedCloud: string, isAwsSelected: boolean, ipAddress: string, publicIP: string, instanceName: string, publicKey: string): Observable<any> {
    return this.http.post('http://myinstantcode-back.ddns.net/api/command/terraform', {selectedCloud, isAwsSelected, ipAddress, publicIP, instanceName, publicKey});
  }
}
