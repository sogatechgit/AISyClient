import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material.module';
import { APIModule } from './../api/api.module';


import { SettingsModule } from './settings/settings.module';

import { LocationSelectorComponent } from './location-selector/location-selector.component';
import { AppLandingComponent } from './app-landing/app-landing.component';
import { HomeComponent } from './home/home.component';

// associated with v2 implementation // import { ChemDbModule } from './chem-db/chem-db.module';


// will become obsolete when v2 is fully implemented

const declare = [
  AppLandingComponent,
  HomeComponent,
  LocationSelectorComponent,
];
const both = [
  // common modules
  APIModule,
  MaterialModule,

  // Feature modules
  SettingsModule,
];

@NgModule({
  declarations: declare,
  imports: [CommonModule, both],
  exports: [AppLandingComponent,HomeComponent, both],
})
export class CoreModule {
  static injector: Injector;
  constructor(injector: Injector) {
    CoreModule.injector = injector;
  }
}
