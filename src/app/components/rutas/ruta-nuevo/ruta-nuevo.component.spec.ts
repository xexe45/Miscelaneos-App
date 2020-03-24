import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNuevoComponent } from './ruta-nuevo.component';

describe('RutaNuevoComponent', () => {
  let component: RutaNuevoComponent;
  let fixture: ComponentFixture<RutaNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
