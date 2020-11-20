import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaivorSubjectsComponent } from './behaivor-subjects.component';

describe('BehaivorSubjectsComponent', () => {
  let component: BehaivorSubjectsComponent;
  let fixture: ComponentFixture<BehaivorSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaivorSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaivorSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
