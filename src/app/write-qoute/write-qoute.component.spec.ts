import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteQouteComponent } from './write-qoute.component';

describe('WriteQouteComponent', () => {
  let component: WriteQouteComponent;
  let fixture: ComponentFixture<WriteQouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteQouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteQouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
