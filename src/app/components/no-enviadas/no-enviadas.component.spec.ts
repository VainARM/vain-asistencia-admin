/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoEnviadasComponent } from './no-enviadas.component';

describe('NoEnviadasComponent', () => {
  let component: NoEnviadasComponent;
  let fixture: ComponentFixture<NoEnviadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoEnviadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoEnviadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
