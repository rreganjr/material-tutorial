import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {Validators} from '@angular/forms';

 // thanks https://stackoverflow.com/questions/48337188/angular-material-autocomplete-not-working-no-errors-shown

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-tutorial';

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  autoCompleteStateInput = new FormControl();
  states: { value: string; display: string; }[];
  filteredStates: { value: string; display: string; }[];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  saveTheDate: Date = null;

  constructor() {
    this.loadStates();
    this.filteredStates = this.states;
    this.autoCompleteStateInput.valueChanges.subscribe((newValue: string) => {
      this.filteredStates = this.filterValues(newValue);
    });
  }

  filterValues(search: string) {
    if (search.length > 0) {
      return this.states.filter( value => value.display.toLowerCase().indexOf(search.toLowerCase()) === 0);
    } else {
      return this.states;
    }
  }

  loadStates() {
     const allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
        Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
        Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
        Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
        North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
        South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
        Wisconsin, Wyoming';
     this.states =  allStates.split(/, +/g).map( function (state) {
        return {
           value: state.toUpperCase(),
           display: state
        };
     });
  }

  dateChanged(event: MatDatepickerInputEvent<Date>) {
    this.saveTheDate = event.value;
  }
}
