import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuputQuoteComponent } from './ouput-quote.component';

describe('OuputQuoteComponent', () => {
  let component: OuputQuoteComponent;
  let fixture: ComponentFixture<OuputQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuputQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuputQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
