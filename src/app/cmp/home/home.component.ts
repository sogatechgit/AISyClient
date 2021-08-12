import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() mainSettings: any = {}

  constructor() { }

  ngOnInit(): void {
  }

  get details(): any {
    if (!this.mainSettings) return {}
    if (!this.mainSettings.homeDetails) return {}
    return this.mainSettings.homeDetails;
  }

  get statConfig(): string {
    if (!this.mainSettings) return "";
    if (!this.mainSettings.homeDetails) return "";
    return this.mainSettings.statsConfig;
  }

  get title(): string {
    return this.details.title ? this.details.title : ""
  }
  get titleSub(): string {
    return this.details.titleSub ? this.details.titleSub : ""
  }

}
