import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePosterComponent } from './make-poster.component';

describe('MakePosterComponent', () => {
  let component: MakePosterComponent;
  let fixture: ComponentFixture<MakePosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakePosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
