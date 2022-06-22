import { Component, OnInit } from '@angular/core';
import { IpServiceService } from 'src/app/ip-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedCloud: string = "AWS";
  isAwsSelected: boolean = true;
  ipAddress: string = "";

  constructor(private ip: IpServiceService) { }

  ngOnInit(): void {
    this.getIP();
  }

  getIP() {
    this.ip.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
    });
  }

  searchIP() {
    this.ipAddress = "";
    this.getIP();
  }

  clouds = { AWS: true, Azure: false };

  checkIsAwsSelected() {
    return this.selectedCloud === "AWS";
  }

  changeCloud(event: any) {
    this.selectedCloud = event.target.value;
    this.isAwsSelected = this.checkIsAwsSelected();
  }

}
