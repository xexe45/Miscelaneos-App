import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStylecComponent } from './ng-stylec.component';

describe('NgStylecComponent', () => {
  let component: NgStylecComponent;
  let fixture: ComponentFixture<NgStylecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStylecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStylecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
