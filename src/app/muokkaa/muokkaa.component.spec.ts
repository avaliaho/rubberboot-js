import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuokkaaComponent } from './muokkaa.component';

describe('MuokkaaComponent', () => {
  let component: MuokkaaComponent;
  let fixture: ComponentFixture<MuokkaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuokkaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuokkaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
