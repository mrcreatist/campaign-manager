import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHostService {

  private tabs = [
    {
      name: 'Upcoming Campaigns',
      alias: 'upcoming',
      isActive: false
    },
    {
      name: 'Live Campaigns',
      alias: 'live',
      isActive: false
    },
    {
      name: 'Past Campaigns',
      alias: 'past',
      isActive: false
    }
  ];

  campaignData: any = {
    upcoming: [
      {
        id: 101,
        date: '2017-05-01',
        name: 'Test Whatsapp',
        subdata: 'US',
        image: 'https://parentzone.org.uk/sites/default/files/soon-873316_1280.png',
        csv: false,
        report: false,
        schedule: true
      },
      {
        id: 102,
        date: '2017-05-01',
        name: 'Test Whatsapp',
        subdata: 'US',
        image: 'https://parentzone.org.uk/sites/default/files/soon-873316_1280.png',
        csv: false,
        report: false,
        schedule: true
      }
    ],
    live: [
      {
        id: 201,
        date: '2017-05-01',
        name: 'Test Whatsapp',
        subdata: 'US',
        image: 'https://parentzone.org.uk/sites/default/files/soon-873316_1280.png',
        csv: false,
        report: false,
        schedule: true
      },
    ],
    past: [
      {
        id: 301,
        date: '2017-05-01',
        name: 'Test Whatsapp',
        subdata: 'US',
        image: 'https://parentzone.org.uk/sites/default/files/soon-873316_1280.png',
        csv: false,
        report: false,
        schedule: true
      },
      {
        id: 302,
        date: '2017-05-01',
        name: 'Test Whatsapp',
        subdata: 'US',
        image: 'https://parentzone.org.uk/sites/default/files/soon-873316_1280.png',
        csv: false,
        report: false,
        schedule: true
      },
      {
        id: 303,
        date: '2017-05-01',
        name: 'Test Whatsapp',
        subdata: 'US',
        image: 'https://parentzone.org.uk/sites/default/files/soon-873316_1280.png',
        csv: false,
        report: false,
        schedule: true
      },
    ]
  };

  constructor() { }

  getTabs(): any {
    return this.tabs;
  }

  getCampaignData(campaignType: string) {
    return this.campaignData[campaignType];
  }

  updateData(dataOld: any, dataNew) {
    const type = dataOld.id / 100;
    switch (type) {
      case 1: {
        const index = this.campaignData.upcoming.findIndex(dataOld);
        this.campaignData.upcoming[index] = dataNew;
        break;
      }
      case 2: {
        const index = this.campaignData.live.findIndex(dataOld);
        this.campaignData.upcoming[index] = dataNew;
        break;
      }
      case 3: {
        const index = this.campaignData.past.findIndex(dataOld);
        this.campaignData.upcoming[index] = dataNew;
        break;
      }
    }
  }
}
