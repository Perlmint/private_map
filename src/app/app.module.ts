import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { LocationInfoComponent } from './location-info/location-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWngHKuhyugquDQiyEFYHgz9yciVDulik'
    })
  ],
	providers: [],
	entryComponents: [LocationInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
