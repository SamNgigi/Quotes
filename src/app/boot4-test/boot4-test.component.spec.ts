import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boot4TestComponent } from './boot4-test.component';

describe('Boot4TestComponent', () => {
  let component: Boot4TestComponent;
  let fixture: ComponentFixture<Boot4TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boot4TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boot4TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
