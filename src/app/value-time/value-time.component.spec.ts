import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueTimeComponent } from './value-time.component';

describe('ValueTimeComponent', () => {
  let component: ValueTimeComponent;
  let fixture: ComponentFixture<ValueTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValueTimeComponent]
    });
    fixture = TestBed.createComponent(ValueTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
