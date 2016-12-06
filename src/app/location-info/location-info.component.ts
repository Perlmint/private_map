import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Location } from '../location';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.css']
})
export class LocationInfoComponent {
  location: Location = null;

  constructor(public dialogRef: MdDialogRef<LocationInfoComponent>) { }

  setLocation(location: Location) {
    this.location = location;
  }
}
