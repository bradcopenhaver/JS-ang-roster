/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditClanComponent } from './edit-clan.component';

describe('EditClanComponent', () => {
  let component: EditClanComponent;
  let fixture: ComponentFixture<EditClanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
