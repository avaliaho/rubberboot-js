import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaaComponent } from './lisaa.component';

describe('LisaaComponent', () => {
  let component: LisaaComponent;
  let fixture: ComponentFixture<LisaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
