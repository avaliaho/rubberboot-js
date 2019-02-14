import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoistaComponent } from './poista.component';

describe('PoistaComponent', () => {
  let component: PoistaComponent;
  let fixture: ComponentFixture<PoistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
