import { Component, OnInit } from '@angular/core';
import { IpServiceService } from 'src/app/ip-service.service';
import {CommandService} from '../../service/command.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedCloud: string = "AWS";
  isAwsSelected: boolean = true;
  ipAddress: string = "";
  publicIP: string = "";
  instanceName: string = '';
  publicKey: string = '';

  constructor(private ip: IpServiceService, private commandService: CommandService) { }

  ngOnInit(): void {
    this.getIP();
  }

  getIP(): void {
    this.ip.getIPAddress().subscribe((res: any) => {
      console.log('TEST IP', res);
      this.ipAddress = res.ip;
    });
  }

  searchIP(): void {
    this.ipAddress = '';
    this.getIP();
  }

  clouds = { AWS: true, Azure: false };

  checkIsAwsSelected(): boolean {
    return this.selectedCloud === 'AWS';
  }

  changeCloud(event: any): void {
    this.selectedCloud = event.target.value;
    this.isAwsSelected = this.checkIsAwsSelected();
  }

  sendRequest(): void {
    this.commandService.execTerraform(this.selectedCloud, this.isAwsSelected, this.ipAddress, this.publicIP, this.instanceName, this.publicKey).subscribe(res => {
      console.log('resr Terraform', res);
    });
  }

}
