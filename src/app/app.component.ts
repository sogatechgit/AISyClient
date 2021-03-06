import { FormGroup } from '@angular/forms';
import { AppMainServiceService } from './svc/app-main-service.service';
import { Component, HostListener, ViewChild } from '@angular/core';
import { AppDataset } from './svc/app-dataset.service';
import { StatsDetailsComponent } from './api/cmp/stats-details/stats-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NG10App';
  public showMaterials: boolean = true;
  public showFontAwesome: boolean = false;

  public mainSettings: any = {
    homeDetails: {
      title:"eDeviation",
      titleSub:"",
      footer:""
    },
    statsConfig: "deviation.stats.json",
    statsConfigX: ""
  }


  constructor(public dataSource: AppMainServiceService) {
    // this.dataSource.dialog = this.dialog;
    if (this.ds) {
      this.ds.KeepAlive((data) => {
        this.ds.SecondsUpdate();
      });
    }

  }

  @ViewChild(StatsDetailsComponent) stats: StatsDetailsComponent;

  @HostListener('window:resize')
  onResize(event) {

  }

  public printMode: boolean = false;
  @HostListener('window:beforeprint')
  onbeforeprint() {
    this.printMode = true;
    // console.log("statWidth: ", this.statWidth,this.printMode)
  }

  @HostListener('window:afterprint')
  onafterprint() {
    this.printMode = false;
    // if(this.stats) this.stats.Refresh();
    // console.log("statWidth: ", this.statWidth,this.printMode)
  }



  get statWidth(): string {
    // return  '1200px'
    // return '100%';
    return this.printMode ? '1200px' : '100%';
  }

  get ds(): AppDataset {
    if (!this.dataSource) return null;
    if (!this.dataSource.ActiveSource) return null;
    return this.dataSource.ActiveSource.appDataset;
  }

  public get withSource(): boolean {
    if (!this.dataSource) return false;
    if (!this.dataSource.ActiveSource) return false;
    return true;
  }

  private _testFormObject: FormGroup = null;
  public get testFormObject(): FormGroup {
    if (!this._testFormObject) this._testFormObject = new FormGroup({});
    return this._testFormObject;
  }

  public TestPost() {
    const ds = this.dataSource.ActiveSource.appDataset;
    ds.Post(null).subscribe(
      (data) => {
        console.log('Data:', data);
      },
      (err) => {
        console.log('Error Posting:', err);
      }
    );
  }
}
