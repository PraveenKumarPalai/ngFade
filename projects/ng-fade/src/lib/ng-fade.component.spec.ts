import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFadeDirective } from './ng-fade.directive';

describe('NgFadeDirective', () => {
  let component: NgFadeDirective;
  let fixture: ComponentFixture<NgFadeDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFadeDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFadeDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
