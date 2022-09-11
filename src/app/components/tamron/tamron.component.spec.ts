import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamronComponent } from './tamron.component';

describe('TamronComponent', () => {
  let component: TamronComponent;
  let fixture: ComponentFixture<TamronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TamronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
