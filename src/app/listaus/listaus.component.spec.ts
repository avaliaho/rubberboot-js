import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListausComponent } from './listaus.component';

describe('ListausComponent', () => {
  let component: ListausComponent;
  let fixture: ComponentFixture<ListausComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListausComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
