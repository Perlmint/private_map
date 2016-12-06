import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import * as _ from 'lodash';
import { Location } from './location';
import { LocationInfoComponent } from './location-info/location-info.component';
import * as fetch from 'isomorphic-fetch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Map';
  lat = 37.5650168;
  lng = 126.849121;
  selected_locations: Location[] = [];
  all_locations: Location[] = [];
  locations: Location[] = [];

  constructor(private _dialog: MdDialog) {}

  ngOnInit() {
    fetch('assets/locations.json')
      .then(resp => resp.json())
      .then(locations => this.all_locations = locations);
  }

  filterLocations(filter: string) {
    const tags = _.map(filter.split(","), t => t.trim());
    this.locations = _.filter(this.all_locations, location => _.reduce(tags, (prev, tag) => !prev ? _.includes(location.tag, tag) : prev, false));
  }

  toggleItem(location: Location, newValue: boolean) {
    const selected = this.isSelected(location);

    if (!newValue) {
      if (selected) {
        _.remove(this.selected_locations, location);
      }
    } else {
      if (!selected) {
        this.selected_locations.push(location);
      }
    }
  }

  isSelected(location: Location) {
    return _.includes(this.selected_locations, location);
  }

  markerClicked(location: Location) {
    this._dialog.open(LocationInfoComponent).componentInstance
      .setLocation(location);
  }
}
