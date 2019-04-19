import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bypass-panel',
  templateUrl: './bypass-panel.component.html',
  styleUrls: ['./bypass-panel.component.scss']
})
export class BypassPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideRight = () =>  {
      document.querySelector('container').classList.add('right-panel-active');
  }

  slideLeft = () => {
    document.querySelector('container').classList.remove('right-panel-active');
  }

}
