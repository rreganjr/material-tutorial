import { Component, OnInit, Input } from '@angular/core';
import {BypassPanelComponent} from '../bypass-panel/bypass-panel.component';

@Component({
  selector: 'app-sign-up-or-in',
  templateUrl: './sign-up-or-in.component.html',
  styleUrls: ['./sign-up-or-in.component.scss']
})
export class SignUpOrInComponent implements OnInit {

  rightPanelActive: boolean = false;

  constructor() {
   }

  ngOnInit() {
  }

}
