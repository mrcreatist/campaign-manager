import { Component, OnInit, HostBinding } from '@angular/core';
import { DataHostService } from '../data-host.service';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html'
})
export class TabContainerComponent implements OnInit {
  @HostBinding('class') TabContainerComponentClass = 'app-tab-container';

  tabs: any;
  campaignData: any;

  constructor(
    private dataHostService: DataHostService
  ) { }

  ngOnInit() {
    this.tabs = this.dataHostService.getTabs();
    this.campaignData = this.dataHostService.getCampaignData('upcoming');
  }
}
