/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StackDetailsComponent } from './stack-details.component';

describe('StackDetailsComponent', () => {
  let component: StackDetailsComponent;
  let fixture: ComponentFixture<StackDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ StackDetailsComponent ]
    })
    .compileComponents();
=======
      declarations: [StackDetailsComponent]
    })
      .compileComponents();
>>>>>>> e5f6d20... add recommender feature under analyze
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: fix failing test and uncomment
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
