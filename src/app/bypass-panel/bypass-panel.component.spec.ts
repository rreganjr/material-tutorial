import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BypassPanelComponent } from './bypass-panel.component';

describe('BypassPanelComponent', () => {
  let component: BypassPanelComponent;
  let fixture: ComponentFixture<BypassPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BypassPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BypassPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
