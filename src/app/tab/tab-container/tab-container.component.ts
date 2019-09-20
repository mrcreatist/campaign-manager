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
    this.loadData(this.tabs[0]);
  }

  loadData(tab: any) {
    this.campaignData = this.dataHostService.getCampaignData(tab.alias);
    for(let i = 0; i < this.tabs.length; i++) {
      this.tabs[i].isActive = false;
    }
    tab.isActive = true;
  }
}
