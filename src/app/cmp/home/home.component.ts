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

  get settings(): any {
    if (!this.mainSettings) return {}
    return this.mainSettings;
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

  get isDeviation(): boolean {
    return this.title == 'eDeviation';
  }
  get isAnomaly(): boolean {
    return this.title == 'eAnomaly';
  }

  get isMoC(): boolean {
    return this.title == 'eMoC';
  }

  AppClick(event: any) {
    const title = event.target.innerText;
    console.log("Title:", title);
    this.details.title = title;
    switch (title) {
      case 'eDeviation':
        this.settings.statsConfig = 'deviation.stats.json';
        break;
      case 'eAnomaly':
        this.settings.statsConfig = 'anomaly.stats.json';
        break;
      case 'eMoC':
        this.settings.statsConfig = 'moc.stats.json';
        break;
      default:
    }
  }
}
