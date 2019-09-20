import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { DataHostService } from '../data-host.service';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html'
})
export class DataRowComponent implements OnInit {
  @HostBinding('class') DataRowComponentClass = 'app-data-row';

  @Input() data: any;

  constructor(
    private dataHostService: DataHostService
  ) { }

  ngOnInit() {
  }

  addEvent(event: any) {
    const dataNew = this.data;
    const dateObj = new Date(event.value);
    const date =
      dateObj.getFullYear() + '-' +
      ((dateObj.getMonth() + 1) > 9 ? (dateObj.getMonth() + 1) : '0'  + (dateObj.getMonth() + 1)) + '-' +
      (dateObj.getDate() > 9 ? dateObj.getDate() : '0' + dateObj.getDate());
    dataNew.date = date;

    this.dataHostService.updateData(this.data, dataNew);
  }



}
