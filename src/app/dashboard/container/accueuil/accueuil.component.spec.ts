import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueuilComponent } from './accueuil.component';

describe('AccueuilComponent', () => {
  let component: AccueuilComponent;
  let fixture: ComponentFixture<AccueuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueuilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
